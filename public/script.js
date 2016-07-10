const random = (start, end) => (
  Math.ceil(start + Math.random() * (end - start))
)

const randomColor = () => {
  const hue = random(160, 200)
  const saturation = 100
  const lightness = 70
  let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  return color
}

const color = randomColor()
const beetle = document.getElementsByClassName('beetle')[0]
beetle.style.backgroundColor = color
