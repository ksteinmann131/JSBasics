// Create a function called addFront that takes in an array and a number and
// positions the number at the front of the array. Return the new array.

function addFront(array, num){
  array.unshift(num);
  return array;
};

// DO NOT DELETE
module.exports = addFront;
