require('./style.css')

var random = require('./random')
var randomColor = require('./randomColor')

var color = randomColor(40)
var beetle = document.getElementsByClassName('beetle')[0]
beetle.style.backgroundColor = color

var topRow = document.getElementsByClassName('row')[0]
topRow.style.paddingTop = '35px'
var bottomRow = document.getElementsByClassName('row')[1]
bottomRow.style.paddingTop = '35px'

color = randomColor(80)
var spots = topRow.children
var spotSize = random(20, 50) + 'px'
for (var i=0; i < spots.length; i++) {
  var spot = spots.item(i)
  spot.style.backgroundColor = color
  spot.style.width = spotSize
  spot.style.height = spotSize
  spot.style.marginTop = random(10, 60) + 'px'

}

color = randomColor(60)
spots = bottomRow.children
for (var i=0; i < spots.length; i++) {
  spots.item(i).style.backgroundColor = color
}
