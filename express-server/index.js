var express = require('express')

var server = require('./server')
var PORT = process.env.PORT || 3000

var app = express()

app.get('/', server.compliment)

app.listen(PORT, function () {
  console.log('server listening on port: ', PORT)
})
