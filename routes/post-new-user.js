
const express = require('express');
const postNewUser = require('../db/queries.js').postNewUser
// const encrypt = require('../security/encrypt/encrypt.js')
//postNewUser

module.exports = (req, res) => {
  //Function to get one comment from the comment table by its id
  let newUser = {
    name: req.body.name,
    birthday: req.body.birthday,
    // password: encrypt(req.body.password)
  }
  postNewUser(req.body).then((data) => {
    res.json({
      message: "success",
      user: data
    })
  })
}
