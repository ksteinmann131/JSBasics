// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

function removeDuplicates(arr){
  var noDubsArray =[];
  for (i = 0; i < arr.length; i ++) {
    if (noDubsArray.indexOf(arr[i]) == -1){
      noDubsArray.push(arr[i])
    }
  }
  return noDubsArray;
};

// DO NOT DELETE
module.exports = removeDuplicates;

// for(let i = 0;i < arr.length; i++){
//     if(unique_array.indexOf(arr[i]) == -1){
//         unique_array.push(arr[i])
//     }
// }
// return unique_array
// }
