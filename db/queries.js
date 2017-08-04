const knex = require('../db/knex');

module.exports = {
<<<<<<< HEAD
  getAllUsers: () => {
    return knex('user');
  },
  getOneUser: (id) => {
    return knex('user').where('id', id)
  },
  getAllComments: () => {
    return knex('comment');
  },
  getOneComment: (id) => {
    return knex('comment').where('id', id);
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
  deleteComment: (comment, id) => {
    return knex('comment').where('id', id).del();
  }
=======

>>>>>>> 3353dcea8d4c934333c63c5530c469b3e6e5915a
}
