
exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'resource #1', description: 'resource #1\'s description' },
    { name: 'resource #2', description: 'resource #2\'s description' },
    { name: 'resource #3', description: 'resource #3\'s description' },
    { name: 'resource #4', description: 'resource #4\'s description' },
  ])
}
