import binarySearchRecursion from "../../chapter1/binarySearchRecursion";

describe("Test binarySearchRecursion", () => {
  it("should return the index of the target", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 5;
    const result = binarySearchRecursion(arr, target, 0, 9);
    expect(result).toEqual("The index of the target is 4");
  });

  it("should return 'Target does not exist in the array'", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const result = binarySearchRecursion(arr, target, 0, 9);
    expect(result).toEqual("Target does not exist in the array");
  });

  it("should work with letters", () => {
    const arr = ["a", "b", "c", "d", "e", "f", "g"];
    const target = "f";
    const result = binarySearchRecursion(arr, target, 0, 6);
    expect(result).toEqual("The index of the target is 5");
  });
});
