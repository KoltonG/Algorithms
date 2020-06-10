/** Possible inputs */
// Array where the maximu sub array is the full array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// Array where the maximum sub array is the left most sub array
const array2 = [1, 2, 3, 4, -5, -6, -7, -8];
// Array where the maximum sub array is the right most sub array
const array3 = [-1, -2, -3, -4, 5, 6, 7, 8];
// Array where the maximum sub array is the crossing sub array
const array4 = [-1, -2, 3, 4, 5, 6, -7, -8];

/**
 * Finds the maximun sub array sum within an array of integers using a brute
 * force approach O(n^2).
 * @param array - Array which were performing the maximum sub array search
 * @param low - The starting index to search from, defaults to 0
 * @param high - The starting index to search from, default to length - 1
 * @returns - An array (tuple) which returns the left index, the right index
 * and sum of a maximu value within the sub array.
 */
function findMaximumSubArrayBruteForce(
  array: number[],
  low: number = 0,
  high: number = array.length - 1
): [number, number, number] {
  let maxSum = array[low];
  let maxSumLeftIndex = low;
  let maxSumRightIndex = low;

  for (let left = low; left <= high; left++) {
    // Reset the sum when getting a new left index
    let sum = 0;

    for (let right = left; right <= high; right++) {
      sum += array[right];

      if (sum > maxSum) {
        maxSum = sum;
        maxSumLeftIndex = left;
        maxSumRightIndex = right;
      }
    }
  }

  return [maxSumLeftIndex, maxSumRightIndex, maxSum];
}

findMaximumSubArrayBruteForce(array1); //?
findMaximumSubArrayBruteForce(array2); //?
findMaximumSubArrayBruteForce(array3); //?
findMaximumSubArrayBruteForce(array4); //?
