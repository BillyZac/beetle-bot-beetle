module.exports = function generateSpots(number) {
  var spots = []
  for (var i=0; i < number; i++) {
    spots.push({
      color: "tomato",
      size: "50px",
      border: "5px"
    })
  }
  return spots
}
