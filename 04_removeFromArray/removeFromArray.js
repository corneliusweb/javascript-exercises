const removeFromArray = function (mainArr, ...otherArr) {
   const freshArray = [];

   for (let i = 0; i < mainArr.length; i++) {
      if (otherArr.includes(mainArr[i])) {
         continue;
      }
      freshArray.push(mainArr[i])
   }
   return freshArray;
};

// Do not edit below this line
module.exports = removeFromArray;
