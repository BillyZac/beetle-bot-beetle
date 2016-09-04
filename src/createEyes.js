const createSpot = require('./createSpot')

module.exports = (options) => {
  const { size, color } = options

  const leftEye = createSpot({
    x: 170,
    y: 20,
    size,
    color,
  })

  const rightEye = createSpot({
    x: 230,
    y: 20,
    size,
    color,
  })

  return [
    leftEye,
    rightEye,
  ]
}
