exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          { task_description: 'do the thing', notes: "the thing, of course.", completed: true, project_id: 1},
          { task_description: 'do the other thing', notes: "the other one.", completed: true, project_id: 2},
          
        ]);
      });
  };