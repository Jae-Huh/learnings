const express = require('express')

const server = require('./server')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.get('/', server.compliment)
app.get('/profile', server.profile)
app.get('/profile/:id', server.profiles)

app.listen(PORT, function () {
  console.log('server listening on port: ', PORT)
})
