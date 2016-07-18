var assert = require("chai").assert
var generateSpots = require('../src/generateSpots')

describe("The spot generator", function () {
  it("is a function", function () {
    assert.equal(typeof generateSpots, "function")
  })
  xit("returns an array", function () {
    assert.equal(typeof generateSpots(1), "array")
  })
  it("the right number of items", function () {
    assert.equal(generateSpots(3).length, 3)
    assert.equal(generateSpots(1).length, 1)
    assert.equal(generateSpots(0).length, 0)
  })
  it("returns properly formed spots", function() {
    var spot = generateSpots(1)[0]
    assert.equal(typeof spot.color, "string")
    assert.equal(typeof spot.size, "string")
    assert.equal(typeof spot.border, "string")
  })
})
