const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(["one", 'two'], ["one", 'two']);

assertArraysEqual([12, 34], [12, 34]);
assertArraysEqual([12, 4], [12, 34]);