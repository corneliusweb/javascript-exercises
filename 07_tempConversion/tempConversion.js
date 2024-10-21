const convertToCelsius = function (degree) {
	const converted = (degree - 32) / 1.8;
	return Number(converted.toFixed(1));
};

const convertToFahrenheit = function (degree) {
	const converted = degree * 1.8 + 32;
	return Number(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
