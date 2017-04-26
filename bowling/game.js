// Score 119:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
//
// Score 300:
// var frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

var score = 0

function addOpenFrameScore (frames) {
  for (var i = 0; i < frames.length; i++) {
    if (frames[i][0] + frames[i][1] < 10) {
      score += frames[i][0] + frames[i][1]
    }
  }
}

function addSpareScore (frames) {
  for (var i = 0; i < frames.length; i++) {
    if (frames[i][0] !== 10 && frames[i][0] + frames[i][1] === 10) {
      score += 10 + frames[i+1][0]
    }
  }
}

function addStrikeScore (frames) {
  for (var i = 0; i < frames.length; i++) {
    // Checks if strick
    if (frames[i][0] === 10) {
      // Checks if 3 balls were given in the last frame
      if (frames[i].length === 3) {
        score += 10 + frames[i][1] + frames[i][2]
      } else if (i === 8){
        // Checks if it's 9th frame, if yes, then add the next two balls which will be from the last frame
        score += 10 + frames[9][0] + frames[9][1]
      } else if (frames[i+1][0] === 10) {
        // Checks if thenext frame is a strike
        score += 10 + frames[i+1][0] + frames[i+2][0]
      }  else {
        score += 10 + frames[i+1][0] + frames[i+1][1]
      }
    }
  }
}

function calculateScore () {
  addOpenFrameScore(frames)
  addSpareScore(frames)
  addStrikeScore(frames)
  console.log(score)
}

calculateScore()
