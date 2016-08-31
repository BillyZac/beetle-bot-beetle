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

const spot = createSpot({
  x: 200,
  y: 200,
  size: 20,
  color: randomColor(40),
})

const tri = createTriangle({
  x: 200,
  y: 185,
  color: randomColor(40),
  size: 100,
})

container.appendChild(body)
container.appendChild(tri)
container.appendChild(spot)
