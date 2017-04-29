const path = require('path')

function compliment (req, res) {
  res.send('<h1>You have the warmest smile!</h1>')
}

function profile (req, res) {
  const name = req.query.name
  res.sendFile(path.join(__dirname, `./public/${name}.html`))
}

function profiles (req, res) {
  const id = req.params.id
  if (id === '1') {
    res.sendFile(path.join(__dirname, 'public', 'silvia.html'))
  }
  if (id === '2') {
    res.sendFile(path.join(__dirname, 'public', 'sampson.html'))
  }
  // else {
  //   res.status(404).send("404")
  // }
}

function getName(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'get-name.html'))
}

function namedCompliment(req, res) {
  const name = req.body.name
  res.send(`<h1>${name}, you are amazing!</h1>`)
}


module.exports = {
  compliment,
  profile,
  profiles,
  getName,
  namedCompliment
}
