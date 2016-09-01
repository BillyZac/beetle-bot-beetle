module.exports = options => {

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  const { color, size } = options
  const halfWidth = size / 2

  // Starting point
  const x1 = 100
  const y1 = 280

  // Ending point
  const x2 = 300
  const y2 = 280

  // Control point
  const xC = 200
  const yC = -150

  const d=`M${x1} ${y1} Q ${xC} ${yC} ${x2} ${y2}`

  path.setAttribute('d', d)
  path.setAttribute('fill', 'transparent')
  path.setAttribute('stroke', color)
  path.setAttribute('stroke-width', '10px')
  path.setAttribute('opacity', 0.3)

  return path
}
