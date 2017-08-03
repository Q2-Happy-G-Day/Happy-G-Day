//require express and initiate router

var express = require('express');
var router = express.Router();

// route function requirements

const getAllUsers = require('./get-all-users');
const getOneUserById = require('./get-one-user-by-id');
const getAllComments = require('./get-all-comments');
const getOneCommentById = require('./get-one-comment-by-id');
const postNewUser = require('./post-new-user');
const updateUser = require('./update-user');
const deleteComment = require('./delete-comment');

// Router handling for server

router.get('/users', getAllUsers);
router.get('/users/:id', getOneUserById);
router.get('/comments', getAllComments);
router.get('/comments/:id', getOneCommentById);
router.post('/users', postNewUser);
router.post('/comments' postNewComment);
router.put('/users/:id', updateUser);
router.delete('/comments/:id', deleteComment);

//export router

module.exports = router;
