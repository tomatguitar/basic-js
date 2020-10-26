const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false
  } else {
    let name = "";
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        let firstLetter = arr[i].trim().slice(0, 1);
        name += firstLetter;
      } 
    }
    result = name.toUpperCase().split("").sort().join("");
    return result;
  }
}
