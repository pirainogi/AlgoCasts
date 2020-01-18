// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//create empty array to hold the chunked arrays
//retrieve elements from orig array and push
function chunk(array, size) {
  const output = []

  for(let el of array){
    const last = output[output.length - 1]
    if(!last || last.length === size){
      output.push([el])
    } else {
      last.push(el)
    }
  }
  return output
}

//use slice to remove chunks from the original array and push them in as new arrays into the output array
function chunk2(array, size){
  const output = []
  let index = 0;

  while(index < array.length){
    output.push(array.slice(index, index + size))
    index += size
  }
  return output 
}

module.exports = chunk;
