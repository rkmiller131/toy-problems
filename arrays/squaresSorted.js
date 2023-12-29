// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


// solve with 2 pointers:
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      if (Math.abs(nums[right]) > Math.abs(nums[left])) {
        const squared = nums[right] * nums[right];
        result.unshift(squared);
        right --;
      } else {
        const squared = nums[left] * nums[left];
        result.unshift(squared);
        left ++;
      }
    }
    return result;
};

console.log('[4,9,9,49,121] ', sortedSquares([-7,-3,2,3,11]));
console.log('[0,1,9,16,100] ', sortedSquares([-4,-1,0,3,10]));