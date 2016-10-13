require('./style.css')
const createSpot = require('./createSpot')
const createStripe = require('./createStripe')
const createTriangle = require('./createTriangle')
const createEyes = require('./createEyes')

const {
  bodySize,
  bodyColor,
  eyeSize,
  eyeColor,
  spotColor,
  strokeColor,
  spotSize,
} = require('./beetleDefinition')()

const container = document.getElementById('container')

// DEFINE PARTS
const body = createSpot({
  x: 200,
  y: 200,
  size: bodySize,
  color: bodyColor,
  strokeColor: strokeColor,
})
const bodyDouble = createSpot({
  x: 200,
  y: 200,
  size: bodySize * .7,
  color: bodyColor,
  strokeColor: strokeColor,
})

const leftSpot = createSpot({
  x: 120,
  y: 210,
  size: spotSize,
  color: spotColor,
})

const rightSpot = createSpot({
  x: 280,
  y: 210,
  size: spotSize,
  color: spotColor,
})

const eyes = createEyes({
  size: eyeSize,
  color: eyeColor,
 })

// APPEND PARTS
container.appendChild(body)
container.appendChild(bodyDouble)

container.appendChild(leftSpot)
container.appendChild(rightSpot)
container.appendChild(eyes[0])
container.appendChild(eyes[1])
