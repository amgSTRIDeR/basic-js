const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  for(let i = 0; i < arr.length; i+=1) {
    let k = i;
    let count = 1;
    while(arr[k + 1] === arr[i]) {
      count += 1;
      k += 1;
    }
    i = k;
    if(count === 1) {
      result.push(arr[i]);
    } else {
      result.push(`${count}${arr[i]}`)
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
