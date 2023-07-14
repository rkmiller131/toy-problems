/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// strategy: somehow we will have to keep track of how many times each item occurs AND it's index. This makes me think: object in object? And do a sort by ascending order on the index to get the first one that occurs an even number of times.

var evenOccurrence = function(arr) {
  const cache = {};
  arr.forEach((item, i) => {
    // I'm chosing to not use !cache[item] to account for potential edge of 0
    if (cache[item] === undefined) {
      cache[item] = {
        count: 1,
        index: i
      }
    } else {
      cache[item].count++;
    }
  });
  // after setting up our cache object, let's chain a filter and sort for evens/first index
  const cachedArray = Array.from(Object.keys(cache));
  const sortedEvens = cachedArray.filter((value) => (cache[value].count % 2 === 0)).sort((a, b) => (cache[a].index < cache[b].index));
  if (sortedEvens.length > 0) {
    return Number(sortedEvens[0]);
  } else {
    return null;
  }
};

console.log('Should be 4 ', evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]));
console.log('Should be 2 ', evenOccurrence([1, 1, 2, 5, 1, 5, 5, 5, 2, 8]));
console.log('Should be 3 ', evenOccurrence([3, 4, 3, 4]));
console.log('Should be null ', evenOccurrence([0, 1, 2, 3, 4, 5, 6, 7]));
console.log('Should be 0 ', evenOccurrence([1, 4, 2, 7, 0, 2, 4, 0]));
console.log('Should be -5 ', evenOccurrence([-5, 2, 6, 19, 22, -5]));


// PEEKING AT THE PAST - (WOW I DID THIS THE FIRST TIME? KINDA LIKE IT BETTER BUT DOES THIS ACTUALLY TRACK THE FIRST OCCURRENCE?? Nope. Trash.)

// var evenOccurrence = function(arr) {
//   const instanceCount = {};
//   arr.forEach(item => {
//     !instanceCount[item] ? instanceCount[item] = 1 : instanceCount[item]++;
//   });
//   const filteredStorage = arr.filter(currentKey => {
//     for (let key in instanceCount) {
//       return instanceCount[currentKey] % 2 === 0;
//     }
//   });
//   return filteredStorage.length === 0 ? null : filteredStorage[0];
// }
