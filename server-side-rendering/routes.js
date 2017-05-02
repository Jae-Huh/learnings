const art = require('./art.json')

const viewData = {
  title: 'Gallery',
  art: art
}

function homePage (req, res) {
  res.render('home', viewData)
}

// function listArt (req, res) {
//   res.render('home', viewData)
// }

module.exports = {
  homePage
  // listArt
}
