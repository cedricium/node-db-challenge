
exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'project #1', description: 'project #1\'s description', completed: false },
    { name: 'project #2', description: 'project #2\'s description', completed: false },
    { name: 'project #3', description: 'project #3\'s description', completed: true },
    { name: 'project #4', description: 'project #4\'s description', completed: true },
  ])
}
