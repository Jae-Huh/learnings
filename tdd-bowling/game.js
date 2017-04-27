module.exports = {
  scoreFrame
}

function scoreFrame(frame, nextFrame) {
  // Open frame
  if (frame[0] + frame[1] < 10) {
    return frame[0] + frame[1]    
  }

  // Spare frame
  if (frame[0] + frame[1] === 10) {
    return frame[0] + frame[1] + nextFrame[0]
  }
}
