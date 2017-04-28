const express = require('express')

const server = require('./server')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', server.compliment)
app.get('/profile/', server.profile)

app.listen(PORT, function () {
  console.log('server listening on port: ', PORT)
})
