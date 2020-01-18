// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  //from  0 to n
  //create an empty string
  //if the column should have a # add a # to the string
  // double the number and subtract one
  //else add a space to the string
  //console.log the
  const midpoint = Math.floor((2*n - 1) / 2)
  for(let i = 0; i<n; i++){
    let level =  ''
    for(let j = 0; j < (2*n - 1); i++){
      if(midpoint - i <= j && midpoint + i >= j){
        level += '#'
      } else  {
        level += " "
      }
    }
    console.log(level)
  }
}

function pyramid2(n, row = 0; level = 0){
  if(row === n){
    return;
  }
  if(level.length === 2*n - 1){
    console.log(level)
    return pyramid2(n, row+1)
  }
  const midpoint = Math.floor((2*n - 1) / 2)
  let add;
  if(midpoint - row >= level.length && midpoint + row >= level.length){
    add = "#"
  } else  {
    add = " "
  }
  pyramid2(n, row, level + add )
}

module.exports = pyramid;
