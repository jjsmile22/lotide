const assertEqual = require('./assertEqual');

const tail = function(arrayThree) {
  let final = arrayThree.slice(1);
  console.log(final);
  return final;
};

module.exports = tail;




