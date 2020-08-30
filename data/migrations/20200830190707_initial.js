
exports.up = function(knex) {
    await knex.schema.createTable("projects", (project) => {
        project.increments("id")
        project.text("project_name").notNull().unique()
        project.text("description")
    })
    await knex.schema.createTable("tasks", (task) => {
        task.increments("id")
        task.text("task_description").notNull().unique()
        task.integer("project_id").references("id").inTable("projects")
        task.text("notes")
    })
    await knex.schema.createTable("resources", (resource) => {
        resource.increments("id")
        resource.text("resource_name").notNull().unique()
        resource.integer("project_id").references("id").inTable("projects")
    })
    await knex.schema.createTable("projects_resources", (resource) => {
        projects_resources.increments("id")
        projects_resources.integer("project_id").references("id").inTable("projects")
        projects_resources.integer("resources_id").references("id").inTable("resources")
    })


};

exports.down = function(knex) {
  
};
