const express = require('express')
// validateComment

module.exports = (req, res) => {
    res.json({succes: typeof req.query.comment === 'string' && req.query.comment.length > 0})
}
