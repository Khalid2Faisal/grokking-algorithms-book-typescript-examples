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
