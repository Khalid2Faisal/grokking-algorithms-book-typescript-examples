/**
 * If the target is greater than the midpoint, then we know that the target is in the right half of the
 * array, so we recursively call the function on the right half of the array. If the target is less
 * than the midpoint, then we know that the target is in the left half of the array, so we recursively
 * call the function on the left half of the array. If the target is equal to the midpoint, then we
 * return the index of the midpoint.
 * @param arr - the array to search through
 * @param target - the value we are looking for
 * @param start - the starting index of the array
 * @param end - the last index of the array
 * @returns The index of the target value or a message indicating that the target value does not exist
 */
const binarySearchRecursion = (arr, target, start, end) => {
  if (start > end) {
    return "Target does not exist in the array";
  }

  const midIndex = Math.floor((start + end) / 2);

  if (target > arr[midIndex]) {
    return binarySearchRecursion(arr, target, midIndex + 1, end);
  }
  if (target < arr[midIndex]) {
    return binarySearchRecursion(arr, target, start, midIndex - 1);
  }
  return `The index of the target is ${midIndex}`;
};

export default binarySearchRecursion;
