const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let error = "Unable to determine the time of year!";
  let season = "";
  if (!date) {
    return error;
  }
  if(Date.prototype.isPrototypeOf(date)) {
    let month = date.getUTCMonth();
    if ((month > 10 && month < 12) || (month >= 0 && month < 2)) {
      return season = "winter";
    } else if (month >= 2 && month <= 4) {
      return season = "spring";
    } else if (month >= 5 && month <= 7) {
      return season = "summer";
    } else if (month >= 8 && month <= 10) {
      return season = "autumn";
    } else {
      return error;
    }
  } else {
    throw new Error()
  }
}
