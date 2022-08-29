const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe("#assertArraysEqual", () => {
  it("returns ['one', 'two'] for ['one', 'two']", () => {
    assert.strictEqual(assertArraysEqual(['one', 'two'], ['one', 'two']));
  });

  it("returns [12, 34] for [12, 34]", () => {
    assert.strictEqual(assertArraysEqual([12, 34], [12, 34])); 
  });

  it("returns false", () => {
    assert.strictEqual(assertArraysEqual([12, 4], [12, 34])); 
  });

});


// assertArraysEqual(["one", 'two'], ["one", 'two']);

// assertArraysEqual([12, 34], [12, 34]);
// assertArraysEqual([12, 4], [12, 34]);