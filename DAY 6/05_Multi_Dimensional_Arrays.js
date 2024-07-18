/* Activity 5 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    console.log(
      i + 1,
      " row ",
      j + 1,
      "column",
      " element of matrix is : ",
      matrix[i][j]
    );
  }
}
