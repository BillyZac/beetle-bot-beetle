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
  spotSize,
} = require('./beetleDefinition')()

const container = document.getElementById('container')


// DEFINE SIZES
// const bodySize = 150
// const bodyColor = randomColor(40)
// const eyeSize = random(3, 15)
// const eyeColor = randomColor(30)
// const spotColor = randomColor(80)
// const spotSize = random(30, 45)


// DEFINE PARTS
const body = createSpot({
  x: 200,
  y: 200,
  size: bodySize,
  color: bodyColor,
})

const leftSpot = createSpot({
  x: 110,
  y: 180,
  size: spotSize,
  color: spotColor,
})

const rightSpot = createSpot({
  x: 290,
  y: 180,
  size: spotSize,
  color: spotColor,
})

const eyes = createEyes({
  size: eyeSize,
  color: eyeColor,
 })



// APPEND PARTS
container.appendChild(body)

for (let i = -300; i <= 300; i+=60) {
  const stripe = createStripe({
    xC: 200 + i,
    yC: 200,
  })
  container.appendChild(stripe)
}

container.appendChild(leftSpot)
container.appendChild(rightSpot)
container.appendChild(eyes[0])
container.appendChild(eyes[1])
