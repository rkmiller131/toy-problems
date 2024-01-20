/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

// let's say we have an array: [1, 6, 5, 2, 9, 4]
// and the pivot can be any value, so let's just pick the first
// then from there, compare that first value to every other value and sort into the appropriate arr
// you'd get something like:
// smaller = []
// larger = [6, 5, 2, 9, 4]
// pivot = 1
// and the pivot itself is considered, "sorted". There's nothing smaller, so return an empty arr and have 1 be the first elem sorted
// then sort each side with the first value as the new pivot point until you end up with all "leaves"
// by closure, the list will be sorted:
// smaller = []
// pivot = 1
// larger (now the new array) = [6, 5, 2, 9, 4]
// new pivot = 6
// new smaller = [5, 2, 4]
// new larger = [9]
// smaller isn't done recursing so
// new NEW pivot is 5
// new NEW smaller = [2, 4]
// new NEW larger = []
// new new NEW pivot = 2, new new NEW larger = [4], new new NEW smaller = [], and we have our leaves so by closure, we're conatenating backwards, kind of:
// [].concat(2, [4]) = [2, 4] then that's the smaller for the next closure:
// [2, 4].concat(5, []) = [2, 4, 5], then that's the smaller for the next closure:
// [2, 4, 5].concat(6, [9]) = [2, 4, 5, 6, 9] and that's the LARGER for the next closure:
// [].concat(1, [2, 4, 5, 6, 9])
// and now the array is sorted.

var quicksort = function(array) {
  let smaller = [];
  let larger = [];
  // the pivot can be any value, so let's just pick the first
  const pivot = array[0];
  // Base Case: by definition if there is only 1 item in an array, it is sorted
  if (array.length <= 1) return array;
  // populate each partition starting at the index after the pivot
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? smaller.push(array[i]) : larger.push(array[i]);
  }
  smaller = quicksort(smaller); // Recursively sort each side
  larger = quicksort(larger);
  // assuming both arrays have been sorted, concatenate the partitions with the pivot in the middle
  const sorted = smaller.concat(pivot, larger);
  return sorted;
};

// The time complexity is heavily dependent on how we choose the pivot.
// Worst case: The pivot we selected is always the smallest or largest element in a partition (as in the example)
// O(n^2)
// Best case: partitions are optimally balanced
// O(n log n)