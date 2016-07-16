var assert = require("chai").assert
var random = require('../src/random')

describe("Random", function () {
  it("is a function", function () {
    assert.equal(typeof random, "function")
  })
  it("returns a number", function () {
    assert.equal(typeof random(1, 100), "number")
  })
  it("given a nonsensical range, return 0", function () {
    assert.equal(random(1, 1), 0)
  })
})
