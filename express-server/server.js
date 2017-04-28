const path = require('path')

function compliment (req, res) {
  res.send('<h1>You have the warmest smile!</h1>')
}

function profile (req, res) {
  res.sendFile(path.join(__dirname, './silvia.html'))
}


module.exports = {
  compliment,
  profile
}
