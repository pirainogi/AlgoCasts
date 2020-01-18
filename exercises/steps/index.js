// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  //from 0 to n
  //create an empty string
  //if the current column is equal to or less than the current row
  //add a # to the result string
  //otherwise add a space to stair
  //log the result
  for(let i = 0; i < n; i++){
    let stair = ""
    for(let j = 0; j < n; j++){
      if(j <= i){
        stair += "#"
      } else {
        stair += " "
      }
    }
    console.log(stair)
  }
}

function steps2(n, i = 0; stair = ""){
  //create a row counter
  //if row is equal to n, end
  //if stair length is equal to n, we're done with that row
  //if lenfth of stair is less than or equal to row number, add a #
  if(n === i){
    return;
  }
  if (n === stair.length){
    console.log(stair)
    return steps2(n, i+1)
  }
  if(stair.length <= i){
    stair += "#"
  } else {
    stair += " "
  }
  steps2(n, row, stair)
}

module.exports = steps;
