const { NotImplementedError } = require('../lib');

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
function getMatrixElementsSum(matrix, emptyIndexes = []) {
  return matrix.reduce((acc, el, i) => {
    if(Array.isArray(el)) {
      return acc + getMatrixElementsSum(el, emptyIndexes);
    } else {
      if(el === 0) {
        emptyIndexes.push(i);
      }
      if(emptyIndexes.indexOf(i) === -1) {
        return acc + el;
      }
      return acc;
    }
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
