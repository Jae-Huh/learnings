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

test('game.addSpareScore adds scores of spared frames', function (t) {
  var score = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
  var expected = 15

  var actual = game.addSpareScore(score)

  t.equals(actual, expected)
  t.end()
})

test('game.addStrikeScore adds scores for strikes', function (t) {
  var score = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
  var expected = 91

  var actual = game.addStrikeScore(score)

  t.equals(actual, expected)
  t.end()
})
