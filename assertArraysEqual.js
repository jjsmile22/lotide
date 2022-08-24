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

assertArraysEqual(["one", 'two'], ["one", 'two']);

assertArraysEqual([12, 34], [12, 34]);
assertArraysEqual([12, 4], [12, 34]);