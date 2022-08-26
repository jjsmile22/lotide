const words = ["ground", "control", "to", "major", "bob"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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

//1st test
const results2 = map(words, word => word.length);
console.log(results2);
assertArraysEqual(results2, [6, 7, 2, 5, 3])

//2nd test
const results3 = map(words, word => word[1]);
console.log(results3);
assertArraysEqual(results3, ["r", 'o', 'o', 'a', 'o'])

//3rd test
const results4 = map(words, word => word.length * 2);
console.log(results4);
assertArraysEqual(results4, [12, 14, 4, 10, 6])