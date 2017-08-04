
const express = require('express');
const getAllComments = require('../db/queries.js').getAllComments;
//getAllComments

module.exports = (req, res) => {
  //Function to get all comments from the comment table
  getAllComments().then((comments)=> {
    res.json(comments);
  })
}
