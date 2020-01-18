// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// turn the string into an obj that reflects the number of appearances in the string
// find the key of the highest value in the obj
function maxChar(str) {
  const chars = {}
  let max = 0, maxChar = ''

  for(let char of str){
    chars[char] = chars[char] + 1 || 1
  }
  //for-in loop for Objects in JS
  for(let char in chars){
    if(charMap[char] > max){
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar 
}

module.exports = maxChar;
