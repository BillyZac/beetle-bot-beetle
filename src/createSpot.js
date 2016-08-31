module.exports = options => {
  const spot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  const { x, y, size, color } = options

  spot.setAttribute('cx', options.x)
  spot.setAttribute('cy', options.y)
  spot.setAttribute('r', size)
  spot.setAttribute('fill', options.color)
  spot.setAttribute('opacity', 0.5)

  return spot
}
