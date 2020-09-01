const express = require('express');
// const db = require("../data/config")

// Updated variable to point to the data model and not the config
const db = require('./project-model.js');

const router = express.Router();

// read projects
router.get('/projects', async (req, res, next) => { 
    try {
    const projectList = await db.getProjects()
    res.status(200).json(projectList)
    } catch (err) {
        next(err)
    }
})
router.get('/projects/:id', async (req, res, next) => { 
    const { id } = req.params;
    try {
    const projectList = await db.getProjectID(id)
    res.status(200).json(projectList)
    } catch (err) {
        next(err)
    }
})

// read resources
router.get('/resources', async (req, res, next) => { 
    try {
    const resourceList = await db.getResources()
    res.status(200).json(resourceList)
    } catch (err) {
        next(err)
    }
})
// read tasks
router.get('/tasks', async (req, res, next) => { 
    try {
    const taskList = await db.getTasks()
    res.status(200).json(taskList)
    } catch (err) {
        next(err)
    }
})


router.post('/projects', async (req, res, next) => {
  const projectData = req.body;

  try {
    const taskList = await db.addProject(projectData)
    res.status(200).json(taskList)
    } catch (err) {
        next(err)
    } 
});

router.post('/resources', async (req, res, next) => {
  const resourcesData = req.body;

  try {
    const resourceList = await db.addResource(resourcesData)
    res.status(200).json(resourceList)
    } catch (err) {
        next(err)
    } 
});

router.post('/tasks', async (req, res, next) => {
  const tasksData = req.body;

  try {
    const taskList = await db.addTask(tasksData)
    res.status(200).json(taskList)
    } catch (err) {
        next(err)
    } 
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      Schemes.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      Schemes.update(changes, id)
      .then(updatedScheme => {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update scheme' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Schemes.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;