require('./style.css')

const container = document.getElementById('container')

const spot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
spot.setAttribute('cx', 200)
spot.setAttribute('cy', 200)
spot.setAttribute('r', 20)

container.appendChild(spot)
