var test = require('tape')

var game = require('../game')

test('test setup working', function(t) {
  t.pass()
  t.end()
})

test('scores a gutterball frame', function (t) {
  var frame = [0, 0]
  var expected = 0
  var actual = game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})

test('scores a normal frame', function (t) {
  var frame = [2, 3]
  var expected = 5
  var actual = game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})

test('scores a spare frame', function (t) {
  var frame = [3, 7]
  var nextFrame = [8, 1]
  var expected = 18
  var actual = game.scoreFrame(frame, nextFrame)
  t.equal(actual, expected)
  t.end()
})

test('scores a single strike frame', function (t) {
  var frame = [10, 0]
  var nextFrame = [2, 4]
  var expected = 16
  var actual = game.scoreFrame(frame, nextFrame)
  t.equal(actual, expected)
  t.end()
})

test('scores a double strike frame', function (t) {
  var frame = [10, 0]
  var nextFrame = [10, 0]
  var nextNextFrame = [3, 5]
  var expected = 23
  var actual = game.scoreFrame(frame, nextFrame, nextNextFrame)
  t.equal(actual, expected)
  t.end()
})

test('scores a game', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  var expected = 119
  var actual = game.scoreGame(frames)
  t.equal(actual, expected)
  t.end()
})

test('scores a spare in the 10th frame', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [2, 8]
  ]
  var expected = 121
  var actual = game.scoreGame(frames)
  t.equal(actual, expected)
  t.end()
})

test('scores a strike in the 10th frame', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 0]
  ]
  var expected = 121
  var actual = game.scoreGame(frames)
  t.equal(actual, expected)
  t.end()
})

test('scores a game with a complex ending', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
  var expected = 141
  var actual = game.scoreGame(frames)
  t.equal(actual, expected)
  t.end()
})

test('scores a perfect game', function (t) {
  var frames = [
    [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
  ]
  var expected = 300
  var actual = game.scoreGame(frames)
  t.equal(actual, expected)
  t.end()
})
