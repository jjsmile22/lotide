const takeUntil = function(array, callback) {
  const results = [];

  for (const item of array) {
    const returnValue = callback(item);

    if (!returnValue) {
      results.push(item);
    }
  }
  return results;

};

module.exports = takeUntil

let result = takeUntil([1, 2, 3, 4, 5], x => x > 2);
console.log(result);