const { NotImplementedError } = require('../lib');

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
  const arr = Array.from(domains);
  const result = {};
  arr.forEach(el => {
    const domainArr = el.split('.');
    for(let i = 0; i < domainArr.length; i+=1) {
      const key = `.${domainArr.slice(-i).reverse().join('.')}`
      result[key] = (result[key] ?? 0) + 1;
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
