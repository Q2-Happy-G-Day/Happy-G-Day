const knex = require('../db/knex');

module.exports = {

  getAllUsers: () => {
    return knex('user');
  },
  getOneUser: (id) => {
    return knex('user').where('id', id)
  },
  getAllComments: () => {
    return knex('comment');
  },
  getAllCommentsById: (id) => {
    return knex('comment')
      .select('comment.id', 'user.name', 'comment.comment')
      .join('user', 'comment.comment_user_id' , '=', 'user.id')
      .where('comment.birthday_user_id', id)
  },
  postNewUser: (user) => {
    return knex('user').insert(user).returning('*');
  },
  postNewComment: (comment) => {
    return knex('comment').insert(comment).returning('*');
  },
  updateUser: (user, id) => {
    return knex('user').where('id', id).update(user).returning('*');
  },
  deleteComment: (id) => {
    return knex('comment').where('id', id).del();
  }
}
