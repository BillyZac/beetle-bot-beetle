require('./style.css')
const createSpot = require('./createSpot')
const createStripe = require('./createStripe')
const createTriangle = require('./createTriangle')
const createBlob = require('./createBlob')
var randomColor = require('./randomColor')

const container = document.getElementById('container')

const body = createSpot({
  x: 200,
  y: 200,
  size: 150,
  color: randomColor(40),
})

const leftSpot = createSpot({
  x: 110,
  y: 180,
  size: 20,
  color: randomColor(80),
})

const rightSpot = createSpot({
  x: 290,
  y: 180,
  size: 20,
  color: randomColor(80),
})

const tri = createBlob({
  x: 200,
  y: 95,
  color: randomColor(0),
  size: 190,
})

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
