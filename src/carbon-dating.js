const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof (sampleActivity) !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY ||
    parseFloat(sampleActivity) <= 0
  ) {
    return false;
  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let ln = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    let t = Math.ceil(ln / k);
    if (t <= 0) {
      return false;
    } else {
      return t;
    }
  }
}
