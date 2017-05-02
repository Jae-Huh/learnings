var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')
var router = express.Router()

var hbsConfig = {
  extname: 'hbs',
  defaultLayout: 'main'
}

var app = express()
module.exports = app

// Middleware
app.engine('hbs', hbs(hbsConfig))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// Routes
app.use('/', router)
