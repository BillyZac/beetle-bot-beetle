require('./style.css')
const createSpot = require('./createSpot')

const container = document.getElementById('container')

const spot = createSpot({
  color: 'tomato',
  x: 300,
  y: 300,
})

container.appendChild(spot)
