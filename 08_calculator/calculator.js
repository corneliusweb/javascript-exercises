const add = function (n1, n2) {
	return n1 + n2;
};

const subtract = function (n1, n2) {
	return n1 - n2;
};

const sum = function (array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function (array) {
	return array.reduce((product, num) => product * num, 1);
};

const power = function (n1, n2) {
	return n1 ** n2;
};

const factorial = function (num) {
   let result = num;

   if (num === 0 || num === 1) return 1;

   while (num > 1) {
      num--;
      result *= num;
   }
   return result;
};
console.log(factorial(5))

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
