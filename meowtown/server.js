var path = require('path')

var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var server = express()

// view engine config

var hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}
server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

// middleware

server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))

// sample data

var data = {
  cats: [
    {id: 1, name: 'fluffy', age: 3},
    {id: 2, name: 'tick', age: 8},
    {id: 3, name: 'ember', age: 14},
    {id: 4, name: 'bo', age: 12}
  ]
}

// routes

server.get('/', function (req, res) {
  res.redirect('/cats') // what is this doing?
})

server.get('/cats', function (req, res) {
  res.render('index', data)
})

server.get('/cats/new', function (req, res) {
  res.render('new')
})

server.get('/cats/:id', function (req, res) {
  console.log(req.params) // try going to /cats/1
  res.render('show', data.cats[req.params.id-1])
})

server.post('/cats', function (req, res) {
  console.log(req.body)
  data.cats.push(req.body)
  res.redirect('/cats')
})

server.get('/cats/edit/:id', (req, res) => {
  const id = req.params.id
  res.render('edit', data.cats[id-1])
})

module.exports = server
