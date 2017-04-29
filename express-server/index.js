const express = require('express')
const bodyParser = require('body-parser')

const server = require('./server')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, function () {
  console.log('server listening on port: ', PORT)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', server.compliment)
app.get('/profile', server.profile)
app.get('/profile/:id', server.profiles)
app.get('/get-name', server.getName)
app.post('/named-compliment', server.namedCompliment)
