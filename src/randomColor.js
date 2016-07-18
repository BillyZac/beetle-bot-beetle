var random = require('./random')

module.exports = function randomColor(lightness) {
  var hue = random(0, 100)
  var saturation = 70
  var lightness = lightness
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
