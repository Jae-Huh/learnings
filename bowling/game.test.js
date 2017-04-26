var test = require('tape')

var game = require('./game')

test('Test test test', function(t) {
  t.pass()
  t.end()
})

test('game.addOpenFrameScore adds single scores', function (t) {
  // Arrange
  var score = [[1, 8], [2, 7], [3, 5]]
  var expected = 26

  // Act
  var actual = game.addOpenFrameScore(score)

  // Assert
  t.equals(actual, expected)
  t.end()
})
