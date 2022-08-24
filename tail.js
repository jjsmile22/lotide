const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(arrayOne) {
  let arrNew = [];
  for (let i = 1; i < arrayOne.length; i++) {
    arrNew.push(arrayOne[i]);
  }
  console.log(arrNew);
};

const tail2 = function(arrayThree) {
  let final = arrayThree.slice(1);
  console.log(final);
  return final;
};

tail([1, 2, 3, 4]);
tail2([1, 2, 3, 4]);

assertEqual(tail, tail2);
