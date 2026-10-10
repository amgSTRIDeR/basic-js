const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;

  for(let i = 0; i < String(n).length; i += 1) {
    const arr = String(n).split('');
    arr.splice(i, 1);
    max = Math.max(max, +arr.join(''));
  }

  return max;
}

module.exports = {
  deleteDigit
};
