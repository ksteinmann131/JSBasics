// Create a function called sumIt that takes in the array and returns the sum
// of each of the values in the array.

function sumIt(arr){
  var newArr = arr.reduce(function(a,b){
    return a + b;
  }); 
  return newArr;
};

// DO NOT DELETE
module.exports = sumIt;
