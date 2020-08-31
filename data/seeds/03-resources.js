exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          { resource_name: 'the internet', resource_description: "adding data persistence"},
          { resource_name: 'my keyboard', resource_description: "helps typing"},
          { resource_name: 'my mouse', resource_description: "helps clicking"},
          
        ]);
      });
  };