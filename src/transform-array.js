const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new TypeError('\'arr\' parameter must be an instance of the Array!');
  }
  return arr.reduce((acc, cur, index, arr) => {
    switch (acc[index - 1]) {
      case '--discard-next':
        if(arr[index + 1] === '--discard-prev') {
          return acc;
        }
        return acc.slice(0, -1);
      case '--double-next':
        return [...acc.slice(0, -1), cur, cur];
      default:
    }
    switch (cur) {
      case '--discard-prev':
        if(acc.length) {
          acc.pop();
        }
        return acc;
      case '--double-prev':
        if(arr[index - 2] === '--discard-next') {
          return acc;
        }
        if(acc.length) {
          return [...acc, acc[acc.length - 1]];
        }
        return acc;
      case '--double-next':
      case '--discard-next':
        if(arr.length - 1 === index) {
          return acc;
        }
      default:
        return [...acc, cur];
    }
  }, [])
}

module.exports = {
  transform
};
