require('./style.css')
const createSpot = require('./createSpot')
const createTriangle = require('./createTriangle')

const container = document.getElementById('container')

const spot = createSpot({
  x: 300,
  y: 300,
  color: 'tomato',
})


const tri = createTriangle({
  x: 300,
  y: 235,
  color: 'aqua',
  size: 100,
})

container.appendChild(tri)
container.appendChild(spot)
