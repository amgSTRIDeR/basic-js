const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if(!str || !key) throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    let encryptMessage = "";
    for (let i = 0; i < str.length; i++) {
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        encryptMessage += str[i];
      } else {
        let j = count % key.length;
        let charCode = ((str.charCodeAt(i) - 65) + (key.charCodeAt(j) - 65)) % 26 + 65;
        encryptMessage += String.fromCharCode(charCode);
        count++;
      }
    }
    if(!this.direct) return encryptMessage.split("").reverse().join("");
    return encryptMessage;
  }

  decrypt(str, key) {
    if(!str || !key) throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    let decryptMessage = "";
    for (let i = 0; i < str.length; i++) {
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        decryptMessage += str[i];
      } else {
        let j = count % key.length;
        let charCode = ((str.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65) + 26) % 26 + 65;
        decryptMessage += String.fromCharCode(charCode);
        count++;
      }
    }
    if(!this.direct) return decryptMessage.split("").reverse().join("");
    return decryptMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
