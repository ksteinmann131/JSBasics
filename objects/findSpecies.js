// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

function findSpecies(arr) {
  for (i = 0; i < arr.length; i++) {
    var newArr = arr.species[i];
    return newArr;
  }
};

// DO NOT DELETE
module.exports = findSpecies;
