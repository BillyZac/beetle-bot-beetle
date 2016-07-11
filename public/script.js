function random(start, end) {
  return Math.ceil(start + Math.random() * (end - start))
}

function randomColor() {
  var hue = random(160, 200)
  var saturation = 100
  var lightness = 70
  var color =
    ['hsl(',
    hue,
    ',',
    saturation,
    '%,',
    lightness,
    '%)'].join('')
  return color
}

var color = randomColor()
var beetle = document.getElementsByClassName('beetle')[0]
beetle.style.backgroundColor = color
