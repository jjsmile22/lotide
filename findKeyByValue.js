const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(list, value) {
  const file = Object.keys(list);
  for (let key of file) {
    console.log(typeof key);
    console.log(key);
    if (list[key] === value) {
      console.log(key);
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const doubleTrouble = {
  blue: "The Expanse",
  green: "Brooklyn Nine-Nine",
  orange: "Seeside"
};

assertEqual(findKeyByValue(doubleTrouble, "Seeside"), "orange");
assertEqual(findKeyByValue(doubleTrouble, "That '70s Show"), undefined);
