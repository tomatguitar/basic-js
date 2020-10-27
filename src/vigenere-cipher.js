const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("ERROR!!");
    }
    let upperCaseMessage = [...message.toUpperCase()];
    let keyLength = 0;
    let arrKey = key
      .toUpperCase()
      .split("")
      .map((i) => i.charCodeAt() - "A".charCodeAt());
    upperCaseMessage = upperCaseMessage.map((i) => {
      if (!/^[A-Z]/.test(i)) {
        return i;
      } else {
        if (keyLength === arrKey.length) keyLength = 0;
        i = String.fromCharCode(
          i.charCodeAt() + arrKey[keyLength] <= "Z".charCodeAt()
            ? i.charCodeAt() + arrKey[keyLength]
            : i.charCodeAt() + arrKey[keyLength] - 26
        );
        keyLength++;
        return i;
      }
    });
    return this.isDirect
      ? upperCaseMessage.join("")
      : upperCaseMessage.reverse().join("");
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error("ERROR!!");
    let upperCaseMessage = [...message.toUpperCase()];
    let keyLength = 0;
    let arrKey = key
      .split("")
      .map((i) => i.toUpperCase().charCodeAt() - "A".charCodeAt());
    upperCaseMessage = upperCaseMessage.map((i) => {
      if (!/^[A-Z]/.test(i)) {
        return i;
      } else {
        if (keyLength === arrKey.length) keyLength = 0;
        i = String.fromCharCode(
          !(i.charCodeAt() - arrKey[keyLength] < "A".charCodeAt())
            ? i.charCodeAt() - arrKey[keyLength]
            : i.charCodeAt() - arrKey[keyLength] + 26
        );
        keyLength++;
        return i;
      }
    });
    return this.isDirect
      ? upperCaseMessage.join("")
      : upperCaseMessage.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;