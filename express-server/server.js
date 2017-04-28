var express = require('express')

function compliment (req, res) {
  res.send('You have the warmest smile!')
}


module.exports = {
  compliment
}
