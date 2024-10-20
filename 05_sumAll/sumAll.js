const sumAll = function (n1, n2) {
	if (n1 < 0 || n2 < 0) return 'ERROR';
	if (Number.isInteger(n1) && Number.isInteger(n2)) {
		let sum = 0;
		if (n1 < n2) {
			while (n1 <= n2) {
				sum += n1;
				n1++;
			}
			return sum;
		} else if (n1 > n2) {
			while (n2 <= n1) {
				sum += n2;
				n2++;
			}
			return sum;
		}
	}
	return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
