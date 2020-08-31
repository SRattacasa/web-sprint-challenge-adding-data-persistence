exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          { project_name: 'sprint is project', description: "get a passing grade", completed: false },
          { project_name: 'sprint MVP?', description: "getting close", completed: false },
          { project_name: ' MVP?', description: "close", completed: false },
          
        ]);
      });
  };