const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrDeep = 1;
    for (let elem = 0; elem <= arr.length; elem++) {
      let arrCount = 1;
      if (Array.isArray(arr[elem])) {
        arrCount +=this.calculateDepth(arr[elem]);
        arrDeep = Math.max(arrCount, arrDeep)
      }
      
    }
    return arrDeep;
  }
};