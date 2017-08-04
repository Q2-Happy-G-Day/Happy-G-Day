
const express = require('express');
const getAllUsers = require('../db/queries.js').getAllUsers;

module.exports = (req, res) => {
  //Function to get all users of the user table
<<<<<<< HEAD
  getAllUsers().then((users) => {
    res.json(users);
  })
=======
    res.send('HELLO')

>>>>>>> 3353dcea8d4c934333c63c5530c469b3e6e5915a
}
