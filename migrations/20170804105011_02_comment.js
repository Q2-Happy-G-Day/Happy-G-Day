
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comment', (table) => {
    table.increments();
    table.text('comment').notNullable();
    table.integer('birthday_user_id').references('user.id').onDelete('CASCADE');
    table.integer('comment_user_id').references('user.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment');
};
