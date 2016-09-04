const createSpot = require('./createSpot')

module.exports = (options) => {
  const { size } = options

  const leftEye = createSpot({
    x: 170,
    y: 20,
    size,
    color: 'gray'
  })

  const rightEye = createSpot({
    x: 230,
    y: 20,
    size,
    color: 'gray'
  })

  return [
    leftEye,
    rightEye,
  ]
}
