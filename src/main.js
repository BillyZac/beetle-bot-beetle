require('./style.css')
const createSpot = require('./createSpot')
const createTriangle = require('./createTriangle')

const container = document.getElementById('container')

const body = createSpot({
  x: 200,
  y: 200,
  size: 150,
  color: 'gray',
})

const spot = createSpot({
  x: 200,
  y: 200,
  size: 20,
  color: 'tomato',
})

const tri = createTriangle({
  x: 200,
  y: 185,
  color: 'aqua',
  size: 100,
})

container.appendChild(body)
container.appendChild(tri)
container.appendChild(spot)
