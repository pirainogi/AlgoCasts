// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let splitString = str.split("")
  let reversedArray = splitString.reverse()
  let reversedString = reversedArray.join("")
  return reversedString
}

module.exports = reverse;
