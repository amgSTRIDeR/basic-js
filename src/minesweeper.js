const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for(let i = 0; i < matrix?.length; i += 1) {
    result.push([]);
    for(let j = 0; j < matrix[i]?.length; j += 1) {
      let count = 0;
      const leftTop = matrix?.[i - 1]?.[j - 1];
      if(leftTop) count += 1;

      const left = matrix?.[i - 1]?.[j];
      if(left) count += 1;

      const leftBottom = matrix?.[i - 1]?.[j + 1];
      if(leftBottom) count += 1;

      const centerTop = matrix?.[i]?.[j - 1];
      if(centerTop) count += 1;

      const centerBottom = matrix[i]?.[j + 1];
      if(centerBottom) count += 1;

      const rightTop = matrix?.[i + 1]?.[j - 1];
      if(rightTop) count += 1;

      const right = matrix?.[i + 1]?.[j];
      if(right) count += 1;

      const rightBottom = matrix?.[i + 1]?.[j + 1];
      if(rightBottom) count += 1;

      result[i].push(count);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
