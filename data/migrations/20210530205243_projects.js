
exports.up = function(knex) {
  return (
knex.schema
.createTable('projects', table => {
    table.increments('project_id');
    table.string('project_name', 40).notNullable();
    table.string('project_description').nullable();
    table.boolean('prject_completed').defaultTo(0);
})
.createTable('resources', table =>{
table.increments('resource_id');
table.string('resource_name').unique().notNullable();
table.string('resource_description').nullable();
})
.createTable('tasks', table => {
    table.increments('task_id');
    table.string('task_description', 50).notNullable();
    table.string('task_notes', 50).nullable();
    table.boolean('task_completed').defaultTo(0);
    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.project_id')
})
.createTable('project_resources', table => {
    table.increments('pr_id');

    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.project_id')
    table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.resource_id')
    table.integer('task_id')
        .unsigned()
        .notNullable()
        .references('tasks.task_id')
})
  )
};

exports.down = function(knex) {
    return (
        knex.schema
          .dropTableIfExists('project_resources')
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects')
    );
};
