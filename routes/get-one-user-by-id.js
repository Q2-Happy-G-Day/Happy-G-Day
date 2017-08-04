
const express = require('express');
const getOneUser = require('../db/queries.js').getOneUser
// getOneUserById

module.exports = (req, res) => {
  //Function to get one user from the user table by its id
  getOneUser(req.params.id).then((user) => {
    res.json(user);
  })
}
