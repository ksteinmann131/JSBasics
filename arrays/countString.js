// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

function countString (string, letter){
  var count = 0;
  string = string.toLowerCase();
  letter = letter.toLowerCase();
  for (var i = 0; i < string.length; i++){
    if (string[i] == letter){
      count++;
    }
  }
  return count;
}


//function countString(string, letter){
//  var val = /letter/g;
//  var counts = string.match(val).length;
//};

// DO NOT DELETE
module.exports = countString;

//var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
//var expressionToGetSoftware = /software/gi;
//var softwareCount = testString.match(expressionToGetSoftware).length;
