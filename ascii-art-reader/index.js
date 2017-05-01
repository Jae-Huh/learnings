const fs = require('fs')
var readline = require('readline')

start()

function start() {
  welcome()
  commandsAndArts()
}

function welcome () {
  console.log("Hello there, welcome to the world of ASCII art! :D \n")
}

function commandsAndArts () {
  // Command
  console.log(`Choose an artwork to display, or:\n\n'c' to comment\n'v' to view comments\n'd' to delete comments\n'q' to quit\n`)
  // List of artwork
  fs.readdir('./data/arts', (err, files) => {
    for (let i = 0; i < files.length; i ++) {
      console.log(i + ':', files[i])
    }
    userListener()
  })
}

// Takes user input
function userListener () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('\nType your response below.\n', function (input) {
    rl.close()

    if (input >= 0) {
      loadFile(input, (contents) => {
        console.log(contents)
        toContinue()
      })
    } else {
      runCommands(input)
    }
  })
}

// Displays artwork on terminal
function loadFile (index, callback) {
  const artArr = fs.readdirSync('./data/arts')
  fs.readFile(__dirname + '/data/arts/'+ artArr[index], 'utf-8', (err, contents) => {
    if (err) {
        console.log('Error:', err)
    }
    callback(contents)
  })
}

// Run commands
function runCommands (input) {
  switch (input) {
    case 'q':
      process.exit()
      break
    case 'c':
      writeComments(input)
      break
    case 'v':
      viewComments((contents) => {
        console.log(contents)
        toContinue()
      })
      break
    case 'd':
      deleteComments()
      break
  }
}

function writeComments (comment) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('\nYour comment:\n', function (comment) {
    rl.close()
    fs.appendFile('./data/comments.txt', comment + '\n', (err) => {
      if (err) {
        throw err
      }
      console.log('\nYour comment is saved!')
      toContinue()
    })
  })
}

function viewComments (callback) {
  fs.readFile('./data/comments.txt', 'utf-8', (err, contents) => {
    if (err) {
      throw err
    }
    callback(contents)
  })
}

function deleteComments () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('\nAre you sure? [y/n]\n', (input) => {
    rl.close()

    if (input === 'y') {
      fs.writeFile('./data/comments.txt', '', (err) => {
        if (err) {
          throw err
        }
        console.log('\nComments deleted successfully')
        toContinue()
      })
    }
    if (input ==='n') {
      toContinue()
    }
  })
}

// User can press enter to get commands and art list again
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
