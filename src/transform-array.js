const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  result = [];
  let indexNext;
  for (let i = 0; i < arr.length; i++) {
    let indexPrev = i - 1;
    let elem = arr[i];
    if (elem === "--discard-next") {
      indexNext = i + 1;
      i++;
    } else if (elem === "--discard-prev") {
      if (result.length && indexNext !== indexPrev) {
        result.pop();
      }
    } else if (elem === "--double-prev") {
      if (result.length && indexNext !== indexPrev) {
        result.push(result[result.length - 1]);
      }
    } else if (elem === "--double-next") {
      if (i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
