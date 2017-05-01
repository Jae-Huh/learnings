const fs = require('fs')

function welcome () {
  console.log("Hello there, welcome! :D")
}

function listArts () {
  fs.readdir('./data/arts', (err, files) => {
    for (let i = 0; i < files.length; i ++) {
      console.log(i + ':', files[i]);
    }
  })
}

welcome()
listArts()
