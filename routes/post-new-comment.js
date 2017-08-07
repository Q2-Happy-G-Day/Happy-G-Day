
const express = require('express');
const postNewComment = require('../db/queries.js').postNewComment
const getAllUsers = require('../db/queries.js').getAllUsers
//postNewComment

module.exports = (req, res) => {
  //Function to post a new comment to the comment table
  postNewComment(req.body).then((data) => {
    res.json({
      message: "success",
      comment: data
    })
  })
}
