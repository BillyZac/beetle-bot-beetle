module.exports = options => {

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  const { xC, yC } = options // Control points

  // Starting point
  const x1 = 200
  const y1 = 0

  // Ending point
  const x2 = 200
  const y2 = 400

  const d=`M${x1} ${y1} Q ${xC} ${yC} ${x2} ${y2}`

  path.setAttribute('d', d)
  path.setAttribute('fill', 'transparent')
  path.setAttribute('stroke', '#222')
  path.setAttribute('stroke-width', '10px')
  path.setAttribute('opacity', 1)

  return path
}
