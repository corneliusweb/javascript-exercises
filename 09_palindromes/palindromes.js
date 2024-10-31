const palindromes = function (str) {
	const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const breakWord = str
		.toLowerCase()
		.split('')
		.filter((words) => alphanumeric.includes(words))
		.join('');

	const reversedWord = breakWord.split('').reverse().join('');
	return reversedWord === breakWord;
};

// Do not edit below this line
module.exports = palindromes;
