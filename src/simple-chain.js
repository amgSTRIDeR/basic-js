const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return chainMaker.chain.length;
  },

  addLink(value) {
    chainMaker.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > chainMaker.chain.length
    ) {
      chainMaker.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    chainMaker.chain.splice(position - 1, 1);
    return chainMaker;
  },

  reverseChain() {
    chainMaker.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    const chain = chainMaker.chain.join("~~");
    chainMaker.chain = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
