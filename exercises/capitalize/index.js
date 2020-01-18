// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize1(str) {
  //split the string on any spaces
  //capitalize the first character in every element in the array
  //join the array with a space between elements
  //return the new string
  let arr = []
  for(const word of str.split(" ")){
    arr.push(word[0].toUpperCase() + word.slice(1))
  }
  return arr.join(" ")
}

function capitalize2(str){
  //create an empty string
  //iterate through the string, if any character to the left of current char
  //capitalize and add to result
  //otherwise just add to result string
  //how to handle the first character? nothing to the left > automatically capitalize the first char

  let result = str[0].toUpperCase()
  for(let i = 1; i < str.length; i++){
    if(str[i-1] === " "){
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}

module.exports = capitalize;
