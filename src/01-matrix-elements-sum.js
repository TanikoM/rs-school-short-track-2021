/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let j = 0; j < matrix.length; j++) {
    for (let n = 0; n < matrix[n].length; n++) {
      if (j === 0 || matrix[j - 1][n] !== 0) {
        res += matrix[j][n];
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
