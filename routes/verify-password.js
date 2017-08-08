const express = require('express');
const verify = require('../security/encrypt/verify.js');
const knex = require('../db/knex.js');

module.exports = (req, res) => {
  knex('user')
    .select()
    .where('user.name', req.body.name)
    .then((user) => {
      if (user.length < 1) {
        res.json({
          success: false,
          message: "User name does not exist"
        })
      }
      if (verify(req.body.password, user[0].password)) {
        res.json({
          success: true,
          message: "success",
          userId: user[0].id
        })
      } else {
        res.json({
          success: false,
          message: "password is incorrect"
        })
      }
    })
  }
