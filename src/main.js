require('./style.css')
const createSpot = require('./createSpot')
const createTriangle = require('./createTriangle')
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

const tri = createTriangle({
  x: 200,
  y: 95,
  color: randomColor(60),
  size: 190,
})

container.appendChild(body)
container.appendChild(tri)
container.appendChild(leftSpot)
container.appendChild(rightSpot)
