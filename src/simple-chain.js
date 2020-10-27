const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  position: 0,
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let link = `( ${value} )`;
    this.chain.push(link);
    
    return this;
  },
  removeLink(position) {
    if(Number.isNaN(position) || position % 1 !== 0) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position-1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let lastLink = this.chain.join("~~");
    this.chain = [];
    return lastLink;
  }
};

module.exports = chainMaker;
