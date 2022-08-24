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



const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
     
      if (source[i] === itemsToRemove[x]) {
        break;
      }
      if (itemsToRemove.length - 1 === x) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);