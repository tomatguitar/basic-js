const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let resultStr = ['' + str];
  let addition = ['']; 
      
	if (options['repeatTimes']) {
		resultStr = new Array(options['repeatTimes']);
	}
	if (options['additionRepeatTimes']) {
		addition = new Array(options['additionRepeatTimes'])
  } 
	if (!(options['addition'] === undefined)) {
    addition = addition.fill('' + options['addition']);
	}
	if (options['additionSeparator'] != undefined) {
		addition = addition.join('' + options['additionSeparator']);
	} else {
    addition = addition.join('|');
  } 
	if (options.separator != undefined) {
		resultStr = resultStr.fill('' + str + addition).join(options['separator']);
	} else {
    resultStr = resultStr.fill('' + str + addition).join('+');
  }
	 return resultStr;
};