require('./style.css')

var random = require('./random')
var randomColor = require('./randomColor')

var color = randomColor(40)

const container = document.getElementById('container')
const beetle = document.createElement('svg')
container.appendChild(beetle)
