module.exports = function random(start, end) {
  if (start > end ) {
    return 0
  }
  if (start === end ) {
    return 0
  }
  return Math.ceil(start + Math.random() * (end - start))
}
