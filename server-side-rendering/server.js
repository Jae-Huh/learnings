const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')
const router = express.Router()

const hbsConfig = {
  extname: 'hbs',
  defaultLayout: 'main'
}

const app = express()
module.exports = app

// Middleware
app.engine('hbs', hbs(hbsConfig))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// Routes
app.use('/', router)
router.get('/', routes.homePage)
// router.get('/', routes.listArt)
