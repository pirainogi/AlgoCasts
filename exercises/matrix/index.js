// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //create an empty array of arrays
  //create a counter var
  //as long as the starting column <= end column AND start row <= end row
  //loop from start to end column
  //at results[start_row][i] assign counter var
  // increment counter
  // increment start row
  //loop from start row to end row
  // at results[i][end_column] assign counter var
  // increment counter
  // decrement end row
  // repeat for both sides
  const results = []
  for(let i = 0;  i < n; i++){
    results.push([])
  }
  let counter = 1, start_col = 0, start_row = 0, end_col = n - 1, end_row = n - 1
  while(start_col <= end_col && start_row <= end_row){
    for(let i = start_col; i <= end_col; i++){
      results[start_row][i] = counter
      counter ++
    }
    start_row++

    for(let i = start_row; i <= end_row; i++){
      results[i][end_col] = counter
      counter ++
    }
    end_col--

    for(let i = end_col; i >=start_col; i--){
      results[end_row][i] = counter
      counter++
    }
    end_row --

    for(let i = end_row; i >= start_row; i--){
      results[i][start_col] = counter;
      counter++
    }
    start_col ++
  }
  return results
}

module.exports = matrix;
