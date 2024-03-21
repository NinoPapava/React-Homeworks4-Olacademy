
let row = 4;
let col = 5;

const getTable = (row, col) => {
  let array = [];
  for (let i = 0; i < row; i++) {
    array[i] = [];

    for (let j = 0; j < col; j++) {

      if (row % 2 == 0) {
        array[i][j] = row * j + i + 1;
      } else {
        array[i][j] = row * j + i - 1;
      }

    }
  }
  return array;
}

console.log(getTable(row, col));


// Output:
// [
//  [ 1, 8, 9,  16, 17 ],
//  [ 2, 7, 10, 15, 18 ],
//  [ 3, 6, 11, 14, 19 ],
//  [ 4, 5, 12, 13, 20 ]
// ]