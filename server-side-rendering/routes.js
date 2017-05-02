const art = require('./art.json')

const viewData = {
  title: 'Gallery',
  art: art
}

function homePage (req, res) {
  res.render('home', viewData)
}

function showArtwork (req, res) {
  const id = Number(req.params.id)

  const artFinder = art.find((artwork) => {
    return artwork.id === id
  })

  res.render('artworks', artFinder)
}

module.exports = {
  homePage,
  showArtwork
}
