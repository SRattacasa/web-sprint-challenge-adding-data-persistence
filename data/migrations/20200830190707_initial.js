
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (project) => {
        project.increments("id")
        project.text("project_name").notNull().unique()
        project.text("description")
        // revalidate with knex docs - not sure on nullable vs null - maybe not needed? sprint unclear
        project.boolean("completed").notNullable().defaultTo("false")
    })
    await knex.schema.createTable("tasks", (task) => {
        task.increments("id")
        task.text("task_description").notNull().unique()
        task.integer("project_id").references("id").inTable("projects")
        task.text("notes")
        task.boolean("completed").notNullable().defaultTo("false")
    })
    await knex.schema.createTable("resources", (resource) => {
        resource.increments("id")
        resource.text("resource_name").notNull().unique()
        resource.text("resource_description").unique()
        // not really sure if needed
        resource.integer("project_id").references("id").inTable("projects")
    })
    await knex.schema.createTable("projects_resources", (pr) => {
        pr.increments("id")
        pr.integer("project_id").references("id").inTable("projects")
        pr.integer("resources_id").references("id").inTable("resources")
    })


};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
