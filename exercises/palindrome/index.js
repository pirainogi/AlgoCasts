// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if(str.split('').reverse().join('') === str){
    return true
  } return false
}

// cleaned up version of the above

// function palindrome(str) {
//   const rev = str.split('').reverse().join('')
//   return rev === str
// }

// using the .every()
// compare every element in an ARRAY to the opposite element in the array
// con: does more comparisons than necessary 

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }

module.exports = palindrome;
