module.exports = function Event(type, value, current = false) {
  return {type, value, current};
}