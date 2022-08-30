const eqObjects = function(object1, object2) {
  const noomberOne = Object.keys(object1);
  const noomberTwo = Object.keys(object2);

  if (noomberOne.length !== noomberTwo.length) {
    return false;
  }

  for (let key of noomberOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } 
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

const assertObjectsEqual = function(firstObject, secondObject) {
  if (eqArrays(firstArray, secondArray)) {
    return console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
};

module.exports = assertObjectsEqual;
