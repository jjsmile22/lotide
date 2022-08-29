const assert = require('chai').assert;
const tail = require('../tail.js');


describe("#tail", () => {
 
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

});


// tail([1, 2, 3, 4]);
// assertEqual(tail([1, 2, 3, 4]), [2, 3, 4])