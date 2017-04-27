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
