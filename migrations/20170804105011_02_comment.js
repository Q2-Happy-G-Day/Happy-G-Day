
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.text('comment').notNullable();
    table.integer('birthday_user_id').references('users.id').onDelete('CASCADE');
    table.integer('comment_user_id').references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
