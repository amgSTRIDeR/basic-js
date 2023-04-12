const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [...domains];
  let reverseArr = arr.map((item) => item.split(".").reverse());
  let dnsObj = {};

  for (let i = 0; i < reverseArr.length; i++) {
    while (reverseArr[i].length > 0) {
      let key = "." + reverseArr[i][0];
      if (dnsObj[key]) {
        dnsObj[key] += 1;
      } else {
        dnsObj[key] = 1;
      }
      if (reverseArr[i].length > 1) {
        reverseArr[i][1] = reverseArr[i][0] + "." + reverseArr[i][1];
      }
      reverseArr[i].shift();
    }
  }

  return dnsObj;
}

module.exports = {
  getDNSStats
};
