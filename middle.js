const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
};

const middle = function(arr) {
  let finale = [];
  if (arr.length < 3) {
  return finale;
  } else if (arr.length % 2 !== 0) {
    finale.push(arr[Math.floor(arr.length/2)]);
    return finale;
  } else {
    finale.push(arr[Math.floor(arr.length/2) - 1]);
    finale.push(arr[Math.floor(arr.length/2)]);
    return finale;
  }
}; 

console.log(middle([14, 15]));
console.log(middle([14, 15, ]));
console.log(middle([14, 15, 16, 17]));
