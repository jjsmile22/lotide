const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([14, 15]));
console.log(middle([14, 15, ]));
console.log(middle([14, 15, 16, 17]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);