module.exports = {
  scoreFrame,
  scoreGame
}

function scoreGame(frames) {
  var score = 0
  for (var i = 0; i < frames.length; i++) {
    score += scoreFrame(frames[i], frames[i+1], frames[i+2])
  }
  return score
}

function scoreFrame(frame, nextFrame, nextNextFrame) {
  var tempScore = 0
  tempScore += frame[0] + frame[1]

  if (isLastFrame(nextFrame)) {
    if (frame.length === 3) {
      tempScore += frame[2]
    }
  } else if (isStrike(frame)) {
    if (isDoubleStrike(nextFrame)) {
      if (isSecondToLastFrame(nextNextFrame)) {
        tempScore += nextFrame[0] + nextFrame[1]
      } else {
        tempScore += nextFrame[0] + nextNextFrame[0]
      }
    } else {    // If single strike
      tempScore += nextFrame[0] + nextFrame[1]
    }
  } else if (isSpare(frame)) {
    tempScore += nextFrame[0]
  }
  return tempScore
}

function isStrike(frame) {
  return frame[0] === 10
}

function isDoubleStrike(nextFrame) {
  return nextFrame[0] === 10
}

function isSpare(frame) {
  return frame[0] + frame[1] === 10
}

function isLastFrame(nextFrame) {
  return !nextFrame
}

function isSecondToLastFrame(nextNextFrame) {
  return !nextNextFrame
}
