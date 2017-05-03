var server = require('./server')

var port = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Server is listening on port', port)
})
