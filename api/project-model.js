const db = require("../data/config")

// base gets for all in the table
const getProjects = () => { 
   return db.select("*").from("projects")
}

const getResources = () => { 
   return db.select("*").from("resources")
}

const getTasks = () => { 
   return db.select("*").from("tasks")
}

const getProjectID =  (id) => { 
  return db.select("*").from("projects").where("id", id)
}

const getResourcesID =  (id) => { 
  return db.select("*").from("resources").where("id", id)
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


const findSteps =  (id) => { 
    return db("projects")
    .innerJoin("Steps", "Schemes.id", "Steps.scheme_id")
    .where("Schemes.id", id)
    .select("Steps.step_number", "Steps.instructions")
    .orderBy("Steps.step_number")
}

const add = (project) => {
    return db("projects").insert(project)
}

const remove = id => {
    return db("projects").where("projects.id", id).delete()
}

const update = (changes, id) => {
    return db("projects")
      .where( "projects.id", id )
      .update(changes)
  }

module.exports = {
    getProjects, 
    getProjectID,
    getResources,
    getResourcesID,
    getTasks,
    addProject,
    addTask,
    addResource,
} 