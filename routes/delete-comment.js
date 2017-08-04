
const express = require('express');
const deleteComment = require('../db/queries.js').deleteComment
//deleteComment

module.exports = (req, res) => {
  //Function to delete a comment from the comment table
  deleteComment(req.params.id).then((data) => {
    res.json({message: `comment id: ${req.params.id} deleted`})
  })
}
