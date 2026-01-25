// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

function transpose(matrix) {
  return matrix[0].map((_, col) => matrix.map(row => row[col]));
}
