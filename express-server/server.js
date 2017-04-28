var express = require('express')

function compliment (req, res) {
  res.send('<h1>You have the warmest smile!</h1>')
}


module.exports = {
  compliment
}
