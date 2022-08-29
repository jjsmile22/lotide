const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false", () => {
    assert.strictEqual(assertEqual(['one', 'two'], ['one', 'two']));
  });

  it("returns 1 for 1", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });

});



// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);