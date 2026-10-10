const { NotImplementedError } = require('../lib');

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
  alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];


  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    const result = [];
    if (!key || !message) {
      throw new Error('Incorrect arguments!');
    }
    let keyNumber = 0;
    for(let i = 0; i < message.length; i += 1){
      const currentLetter = message[i].toLowerCase();
      if(this.alphabet.indexOf(currentLetter) === -1) {
        result.push(message[i])
        continue;
      }

      const keyIndex = this.alphabet.indexOf(key[keyNumber].toLowerCase());
      const messageIndex = this.alphabet.indexOf(currentLetter);
      if(keyNumber < key.length - 1) {
        keyNumber += 1;
      } else {
        keyNumber = 0;
      }
      let index = 0;

      index = (messageIndex + keyIndex) % this.alphabet.length

      result.push(this.alphabet[index].toUpperCase())

    }
    if(this.isDirect) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }

  }

  decrypt(message, key) {
    const result = [];
    if (!key || !message) {
      throw new Error('Incorrect arguments!');
    }
    let keyNumber = 0;
    for(let i = 0; i < message.length; i += 1){
      const currentLetter = message[i].toLowerCase();
      if(this.alphabet.indexOf(currentLetter) === -1) {
        result.push(message[i])
        continue;
      }

      const keyIndex = this.alphabet.indexOf(key[keyNumber].toLowerCase());
      const messageIndex = this.alphabet.indexOf(currentLetter);
      if(keyNumber < key.length - 1) {
        keyNumber += 1;
      } else {
        keyNumber = 0;
      }
      let index = 0;

      index = (messageIndex - keyIndex + this.alphabet.length) % this.alphabet.length

      result.push(this.alphabet[index].toUpperCase())

    }

    if(this.isDirect) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }


  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
