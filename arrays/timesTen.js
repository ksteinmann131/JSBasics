// Create a function called timesTen that takes in an array and multiplies
// each value by 10 and returns the new array.
// Hint: Use the map method

function timesTen(arr) {
  for (i = 0; i < arr.length; i++) {
    var newArr = arr[i] * 10;
    return newArr;
  }
}

// DO NOT DELETE
module.exports = timesTen;
