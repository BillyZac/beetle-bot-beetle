module.exports = options => {

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  const { x, y, color, size } = options
  const halfWidth = size / 2

  path.setAttribute('d',
    `M ${x}             ${y}
     L ${x - halfWidth} ${y + size}
     L ${x + halfWidth} ${y + size}
     L ${x}             ${y}`)
  path.setAttribute('fill', color)
  path.setAttribute('opacity', 1)

  return path
}
