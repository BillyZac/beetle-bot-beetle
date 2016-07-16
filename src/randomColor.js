var random = require('./random')

module.exports = function randomColor() {
  var hue = random(0, 100)
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
