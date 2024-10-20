const reverseString = function (str) {
	if (str) {
		const splitStr = str.split('');
		const reversedStr = splitStr.reverse();
		const joinedStr = reversedStr.join('');

		return joinedStr;
	}
	return '';
};
// Do not edit below this line
module.exports = reverseString;
