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
    arrNew.push(i);
  }
  console.log(arrNew);
}
 
tail([1, 2, 3, 4]);
