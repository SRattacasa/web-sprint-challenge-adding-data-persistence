const db = require("../data/config")

// base gets for all in the table
const getProjects = () => { 
   return db.select("*").from("projects")
}

const getResources = () => { 
   return db.select("*").from("resources")
}

// get the tasks table back, join it with the projects table and then select some fields to give back to the requests as per MVP
const getTasks = id => { 
   return db("tasks")
   .join("projects as p", "p.id", "tasks.id")
   .select("p.project_name", "p.description", "tasks.task_description", "tasks.id", "tasks.completed")
}


const addProject = project => {
    return db("projects").insert(project)
}

const addTask = task => {
    return db("tasks").insert(task)
}

const addResource = resource => {
    return db("resources").insert(resource)
}



module.exports = {
    getProjects, 
    getResources,
    getTasks,
    addProject,
    addTask,
    addResource,
} 