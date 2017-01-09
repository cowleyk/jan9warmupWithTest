// Warmup - Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests instead of console.logs :slightly_smiling_face:.
//
// plusOneSum([1, 2, 3, 4]); // = 14
'use strict';

function plusOneSum(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return 'fxn needs all numbers';
    }
    var bump = arr[i] + 1;
    sum += bump;
  }

  return sum;
}

module.exports = plusOneSum;
