const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  if(arr.length !== 6) return false;
  let result = true;
  arr.forEach((el) => {
      if(Number.isNaN(Number.parseInt(el, 16)) || Number.parseInt(el, 16) === undefined) {
        result = false;
      };
    }
  )
  return result;
}

module.exports = {
  isMAC48Address
};
