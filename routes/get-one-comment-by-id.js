
const express = require('express');
const getOneComment = require('../db/queries.js').getOneComment
//getOneCommentById

module.exports = (req, res) => {
  //Function to get one comment from the comment table by its id
  getOneComment(req.params.id).then((comment) => {
    res.json(comment);
  })
}
