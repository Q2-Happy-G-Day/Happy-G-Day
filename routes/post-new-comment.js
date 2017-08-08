
const express = require('express');
const postNewComment = require('../db/queries.js').postNewComment
const getAllUsers = require('../db/queries.js').getAllUsers
const validComment = require('../security/validation/validate-comment.js')

//postNewComment

module.exports = (req, res) => {
  //Function to post a new comment to the comment table
  if (validComment(req.body.comment)) {
    postNewComment(req.body).then((data) => {
      res.json({
        message: "success",
        comment: data
      })
    })
  } else {
    res.json({message: "failed to comment, comment is empty"})
  }
}
