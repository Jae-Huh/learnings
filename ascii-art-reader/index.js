const fs = require('fs')
var readline = require('readline')

start()

function start() {
  welcome()
  listArts()
  // pressEnter()
}

function welcome () {
  console.log("Hello there, welcome! :D")
}

function listArts () {
  fs.readdir('./data/arts', (err, files) => {
    for (let i = 0; i < files.length; i ++) {
      console.log(i + ':', files[i]);
    }
  })
  pressEnter()
}

function pressEnter () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    loadFile(input, (contents) => {
      console.log(contents)
      listArts()
    })
  })
}

function loadFile (index, callback) {
  const artArr = fs.readdirSync('./data/arts')
  fs.readFile(__dirname + '/data/arts/'+ artArr[index], 'utf-8', (err, contents) => {
    if (err) {
        console.log('Error:', err)
    }
    callback(contents)
  })
}
