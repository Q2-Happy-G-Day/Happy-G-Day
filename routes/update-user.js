
const express = require('express');
const updateUser = require('../db/queries.js').updateUser
//updateUser

module.exports = (req, res) => {
  //Function to update a user's information on the user table
  updateUser(req.body, req.params.id).then((data) => {
    res.json({
      message: 'success',
      user: data
    })
  })
}
