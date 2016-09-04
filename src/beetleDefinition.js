const randomColor = require('./randomColor')
const random = require('./random')

module.exports = () => ({
  bodySize: 150,
  bodyColor: randomColor(40),
  eyeSize: random(3, 15),
  eyeColor: randomColor(30),
  spotColor: randomColor(80),
  spotSize: random(30, 45),
})
