const fs = require('fs')
var readline = require('readline')

start()

function start() {
  welcome()
  commandsAndArts()
  // pressEnter()
}

function welcome () {
  console.log("Hello there, welcome to the world of ASCII art! :D \n")
}

function commandsAndArts () {
  console.log(`Choose an artwork to display, or:\n'c' to comment\n'e' to erase comments\n'v' to view comments\n'q' to quit
`)
  fs.readdir('./data/arts', (err, files) => {
    for (let i = 0; i < files.length; i ++) {
      console.log(i + ':', files[i])
    }
    userListener()
  })
}

function userListener () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('\nType your response.\n', function (input) {
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

  rl.question('Press enter to continue.\n', function (input) {
    rl.close()

    commandsAndArts()
  })
}
