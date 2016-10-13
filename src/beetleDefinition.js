const randomColor = require('./randomColor')
const random = require('./random')
const randomBoolean = require('./randomBoolean')
const isBodyHollow = randomBoolean()

module.exports = () => ({
  bodySize: random(120, 250),
  bodyColor: !isBodyHollow ? randomColor(40) : 'none',
  strokeColor: isBodyHollow ? randomColor(80) : 'none',
  eyeSize: random(3, 50),
  eyeColor: randomColor(30),
  spotColor: randomColor(40),
  spotSize: random(10, 75),
})
