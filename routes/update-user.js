
const express = require('express');
const updateUser = require('../db/queries.js').updateUser
const encrypt = require('../security/encrypt/encrypt.js')
const validBirthday = require('../security/validation/valid-birthday.js')
const validPassword = require('../security/validation/valid-password.js')
//updateUser

module.exports = (req, res) => {
  //Function to update a user's information on the user table
  console.log(req.body, req.params);
  let newUser = {
    name: req.body.name == "" ? undefined : req.body.name,
    birthday: req.body.birthday == "//" ? undefined : req.body.birthday,
    password: req.body.password == "" ? undefined : encrypt(req.body.password)
  }
  console.log(newUser);
  if (newUser.birthday && validBirthday(newUser.birthday) == false) {
    res.json({
      success: false,
      message: "birthday is not valid"
    })
  } else if (newUser.password && validPassword(newUser.password) == false) {
    res.json({
      success: false,
      message: "password is not valid, must contain a uppercase letter, a lowercase letter, and a number"
    })
  } else if (!newUser.name && !newUser.birthday && !newUser.password){
    res.json({
      success: false,
      message: "no data added"
    })
  } else {
    updateUser(newUser, req.params.id).then((data) => {
      res.json({
        message: 'update success',
        user: data
      })
    })
  }
}
