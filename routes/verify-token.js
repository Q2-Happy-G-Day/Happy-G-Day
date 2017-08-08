const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');

module.exports = (req, res) => {
  let token = Object.keys(req.body)[0].split('"').join('')
  jwt.verify(token , process.env.TOKEN_SECRET, (err, decoded) => {
    res.json({
      token: token,
      user: decoded
    })
  });
}
