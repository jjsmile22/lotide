const middle = function(arr) {
  let finale = [];
  if (arr.length < 3) {
  return finale;
  } else if (arr.length % 2 !== 0) {
    finale.push(arr[Math.floor(arr.length/2)]);
    return finale;
  } else {
    finale.push(arr[Math.floor(arr.length/2) - 1]);
    finale.push(arr[Math.floor(arr.length/2)]);
    return finale;
  }
}; 

module.exports = middle;
