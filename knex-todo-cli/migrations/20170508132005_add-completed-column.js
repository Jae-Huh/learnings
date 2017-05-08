
exports.up = function(knex, Promise) {
  return knex.schema.table('todos', table => {
    table.boolean('completed')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('todos', table => {
    table.dropColumn('completed')
  })
}
