/**
 * We start with the middle index of the array and compare the target value with the value of the
 * middle index. If the target value is greater than the value of the middle index, we discard the left
 * half of the array and repeat the process with the right half. If the target value is less than the
 * value of the middle index, we discard the right half of the array and repeat the process with the
 * left half. If the target value is equal to the value of the middle index, we return the index of the
 * middle index
 * @param arr - The array to search through
 * @param target - the value we're looking for
 * @returns The index of the target value or a message indicating that the target value does not exist
 */
const binarySearch = (arr, target) => {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (target > arr[midIndex]) {
      lowIndex = midIndex + 1;
    } else if (target < arr[midIndex]) {
      highIndex = midIndex - 1;
    } else {
      return `The index of the target is ${midIndex}`;
    }
  }
  return "Target does not exist in the array";
};

export default binarySearch;
