
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.text('birthday').notNullable();
      table.text('password').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
