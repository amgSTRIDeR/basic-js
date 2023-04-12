const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + '';
  let arr = options.repeatTimes ? [] : [str + options.addition || ''];
  for (let i = 0; i < options.repeatTimes; i++) {
    let str2 = str;
    if (options.addition !== undefined) {
      const additionOptions = {
        repeatTimes: options.additionRepeatTimes || 1,
        separator: options.additionSeparator || "|",
      };
      str2 = str + repeater(options.addition, additionOptions);
    }
    arr.push(str2);
  } 
  return arr.join(`${options.separator || "+"}`);
}

module.exports = {
  repeater
};
