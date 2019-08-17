
exports.up = function(knex) {
  knex.schema.createTable('projects', table => {
    table.increments('id')
    table
      .string('name')
      .notNullable()
    table.string('description')
    table
      .boolean('completed')
      .notNullable()
      .defaultTo(false)
  })

  knex.schema.createTable('resources', table => {
    table.increments('id')
    table
      .string('name')
      .unique()
      .notNullable()
    table.string('description')
  })

  knex.schema.createTable('tasks', table => {
    table.increments('id')
    table
      .string('description')
      .notNullable()
    table.string('notes')
    table
      .boolean('completed')
      .notNullable()
      .defaultTo(false)
  })
}

exports.down = function(knex) {

}
