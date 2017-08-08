
const express = require('express');
const updateComment = require('../db/queries.js').updateComment
//updateUser

module.exports = (req, res) => {
  //Function to update a user's information on the user table
  console.log(req.params.id);
  console.log(req.body.comment);
  if (req.body.comment == ''){
    res.json({
      message: 'update fail'
    })
  }else{
    let comment2update = {
      comment: req.body.comment,
      birthday_user_id: undefined,
      comment_user_id: undefined
    }
    console.log(comment2update);
    updateComment(comment2update, req.params.id).then((data) => {
      res.json({
        message: 'update success',
        user: data
      })
    })
  }
}
