module.exports = function random(start, end) {
  return Math.ceil(start + Math.random() * (end - start))
}
