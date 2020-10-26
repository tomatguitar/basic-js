const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(num, speed) {
  let result = {};
  result.turns = 2**num - 1;
  result.seconds = Math.floor((result.turns * 3600) / speed);
  return result;
};
