const createSpot = require('./createSpot')

module.exports = (options) => {
  const { size, color } = options
  const leftXPosition = 100
  const rightXPosition = 300

  const eyes = []


  const eye1 = document.createElementNS('http://www.w3.org/2000/svg', 'g')

  const pupil1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  pupil1.setAttribute('cx', leftXPosition)
  pupil1.setAttribute('cy', 20)
  pupil1.setAttribute('r', size)
  pupil1.setAttribute('fill', color)
  pupil1.setAttribute('opacity', 0.5)
  const ring1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  ring1.setAttribute('cx', leftXPosition)
  ring1.setAttribute('cy', 20)
  ring1.setAttribute('r', size + 10)
  ring1.setAttribute('stroke', color)
  ring1.setAttribute('stroke-width', '3px')
  ring1.setAttribute('fill', 'transparent')

  eye1.appendChild(pupil1)
  eye1.appendChild(ring1)

  const eye2 = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  const pupil2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  pupil2.setAttribute('cx', rightXPosition)
  pupil2.setAttribute('cy', 20)
  pupil2.setAttribute('r', size)
  pupil2.setAttribute('fill', color)
  pupil2.setAttribute('opacity', 0.5)
  const ring2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  ring2.setAttribute('cx', rightXPosition)
  ring2.setAttribute('cy', 20)
  ring2.setAttribute('r', size + 10)
  ring2.setAttribute('stroke', color)
  ring2.setAttribute('stroke-width', '3px')
  ring2.setAttribute('fill', 'transparent')

  eye2.appendChild(pupil2)
  eye2.appendChild(ring2)

  eyes.push(eye1)
  eyes.push(eye2)

  return eyes
}
