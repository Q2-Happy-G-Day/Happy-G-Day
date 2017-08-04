
const express = require('express');
const getAllUsers = require('../db/queries.js').getAllUsers;

//getAllUsers

module.exports = (req, res) => {
  //Function to get all users of the user table
  getAllUsers().then((users) => {
    res.json(users);
  })
}
