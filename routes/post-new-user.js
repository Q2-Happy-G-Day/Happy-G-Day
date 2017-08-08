
const express = require('express');
const postNewUser = require('../db/queries.js').postNewUser
const encrypt = require('../security/encrypt/encrypt.js')
const validUser = require('../security/validation/validate-user.js')
//postNewUser

module.exports = (req, res) => {
  //Function to get one comment from the comment table by its id

  let response = validUser({
    name: req.body.name,
    birthday: req.body.birthday,
    password: req.body.password
  })
  
  if (response.success == true) {
    let newUser = {
      name: req.body.name,
      birthday: req.body.birthday,
      password: encrypt(req.body.password)
    }
    postNewUser(newUser).then((data) => {
      console.log(data);
      res.json({
        success: response.success,
        message: response.message,
        user: data
      })
    })
  } else {
    res.json(response)
  }
}
