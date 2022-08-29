const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
  });

});


// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));



