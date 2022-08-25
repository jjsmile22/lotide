const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
};

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

const letterPositions = function(stringer) {
  const results = {};
  for (let i = 0; i < stringer.length; i++) {
    if (results[stringer[i]]) {
      results[stringer[i]].push(i);
    } else {
      results[stringer[i]] = [i];
    }
  }
  return results;
};