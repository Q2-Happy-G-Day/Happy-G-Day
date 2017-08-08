//require express and initiate router

const express = require('express');
const router = express.Router();

// route function requirements

const getAllUsers = require('./get-all-users.js');
const getOneUserById = require('./get-one-user-by-id.js');
const getAllComments = require('./get-all-comments.js');
const getAllCommentsById = require('./get-all-comments-by-id.js');
const postNewUser = require('./post-new-user.js');
const postNewComment = require('./post-new-comment.js');
const updateUser = require('./update-user.js');
const deleteComment = require('./delete-comment.js');
const webToken = require('./web-token.js');
const verifyToken = require('./verify-token.js');
const verifyPassword = require('./verify-password.js');
// Router handling for server

router.get('/users', getAllUsers);
router.get('/users/:id', getOneUserById);
router.get('/comments', getAllComments);
router.get('/comments/:id', getAllCommentsById);
router.post('/users', postNewUser);
router.post('/comments', postNewComment);
router.put('/users/:id', updateUser);
router.delete('/comments/:id', deleteComment);
router.post('/login/:id', webToken);
router.post('/verify', verifyToken);
router.post('/password', verifyPassword);
//export router

module.exports = router;
