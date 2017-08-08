const jwt = require('jsonwebtoken');
const express = require('express');
const knex = require('../db/knex');

module.exports = function(req, res) {
  console.log(req.params.id);
  knex('user')
  .select('user.name', 'user.birthday', 'user.id')
  .where('id', req.params.id)
  .first()
  .then(data => {
    var token = jwt.sign(data, process.env.TOKEN_SECRET)
    res.json({
      token: token,
      user: {
      id: data.id,
      name: data.name,
      birthday: data.birthday
      }
    })
  })
}
