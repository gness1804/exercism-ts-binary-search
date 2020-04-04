import BinarySearch from "./binary-search"
import { getIndex } from './scratch';

describe('scratch function', () => {
  // return undefined for unsorted array
  // return undefined for empty array
  // return the target index

  it('should just return the index when it is the index of the target initially', () => {
    const arr = [1, 3, 6, 8, 9, 10, 12, 14, 32];
    const target = 9;
    const result = getIndex(arr, target);
    expect(result).toEqual(4)
  });

  it('should return the index of a number for an even numbered array', () => {
    // length === 8;
    const arr = [1, 3, 6, 8, 9, 10, 12, 14];
    const target = 12;
    const result = getIndex(arr, target);
    expect(result).toEqual(6);
  });

  it('should return the index of a number for an odd numbered array', () => {
    // length === 9
    const arr = [1, 3, 6, 8, 9, 10, 12, 14, 32];
    const target = 3;
    const result = getIndex(arr, target);
    expect(result).toEqual(1)
  });
});

describe.skip("BinarySearch", () => {
  const sortedArray = [1, 2, 3, 4, 5, 6]
  const sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12]
  const unsortedArray = [10, 2, 5, 1]

  it("should require a sorted array", () => {
    const invalidBinarySearch = new BinarySearch(unsortedArray)
    const validBinarySearch = new BinarySearch(sortedArray)

    expect(typeof invalidBinarySearch.array).toEqual("undefined")
    expect(Array.isArray(validBinarySearch.array)).toEqual(true)
  })

  it("should find the correct index of an included value", () => {
    expect(new BinarySearch(sortedArray).indexOf(3)).toEqual(2)
  })

  xit("should search the middle of the array", () => {
    expect(new BinarySearch(sortedArrayOfOddLength).indexOf(2)).toEqual(3)
  })

  xit("should return -1 for a value not in the array", () => {
    expect(new BinarySearch(sortedArray).indexOf(10)).toEqual(-1)
  })
})
