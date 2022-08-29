const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

tail([1, 2, 3, 4]);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4])