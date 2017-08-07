
const express = require('express');
const getAllCommentsById = require('../db/queries.js').getAllCommentsById
//getOneCommentById

module.exports = (req, res) => {
  //Function to get one comment from the comment table by its id
  getAllCommentsById(req.params.id).then((comments) => {
    res.json(comments);
  })
}
