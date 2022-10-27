import binarySearch from "../../chapter1/binarySearch";

describe("Test binarySearch", () => {
  it("should return the index of the target", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toEqual("The index of the target is 4");
  });

  it("should return 'Target does not exist in the array'", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const result = binarySearch(arr, target);
    expect(result).toEqual("Target does not exist in the array");
  });
});
