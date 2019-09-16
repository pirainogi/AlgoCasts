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

//cleaned up version of above

// function reverse(str) {
//   return str.split("").reverse().join("")
// }


//create an empty string
//take the last char of the orig string and add to the start of the new string
//return the reversed string

// function reverse(str) {
//   let reversed = ''
//   for (let char of str){
//     reversed = char + reversed
//   }
//   return reversed
// }

//turn string into an array
//use reduce (arrow fn, initial value)

// function reversed(str){
//   return str.split("").reduce((rev, char) => char + rev, "")
// }

module.exports = reverse;
