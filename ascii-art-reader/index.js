const fs = require('fs')
var readline = require('readline')

start()

function start() {
  welcome()
  listArts()
  // pressEnter()
}

function welcome () {
  console.log("Hello there, welcome to the world of ASCII art! :D \n")
}

function listArts () {
  fs.readdir('./data/arts', (err, files) => {
    for (let i = 0; i < files.length; i ++) {
      console.log(i + ':', files[i])
    }
    showArt()
  })
}

function showArt () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('\nWhich file should I load? \n', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    loadFile(input, (contents) => {
      console.log(contents)
      toContinue()
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

function toContinue () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Press enter to continue', function (input) {
    rl.close()

    listArts()
  })
}
