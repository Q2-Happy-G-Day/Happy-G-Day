
const express = require('express')
const validBirthday = require('../security/validation/valid-birthday.js');
const validName = require('../security/validation/valid-name.js');
const validPassword = require('../security/validation/valid-password');

module.exports = (req, res) => {
  let newUser = {
    name: req.body.name,
    birthday: req.body.birthday,
    password: req.body.password
  }
  if (!validBirthday(newUser.birthday)) {
    res.json({
      success: false,
      message: 'your birthday is not valid.'
    })
  } else if (!validName(newUser.name)) {
    res.json({
      success: false,
      message: 'your name is not valid: only alphanumerical characters and spaces allowed.'
    })
  } else if (!validPassword(newUser.password)) {
    res.json({
      succes: false,
      message: 'your password is not valid. Passwords must be 8 characters in length and contain at least one uppercase character, lowercase character, and a number'
    })
  } else {
    res.json({
      success: true,
      message: 'you have successfuly signed up!',
      user: newUser
    })
  }
}
