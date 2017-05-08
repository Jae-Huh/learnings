
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'vacuum the house'},
        {id: 2, task: 'water the plants'},
        {id: 3, task: 'clean the stove'}
      ]);
    });
};
