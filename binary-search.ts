export default class BinarySearch {
  array: number[] | undefined;

  constructor(arr: number[]) {
    this.array = this.generateArray(arr);
  }

  generateArray(arr: number[]): number[] | undefined {
    return JSON.stringify(arr) ===
      JSON.stringify(
        arr.sort((a, b) => {
          if (a < b) return -1;
          else if (a > b) {
            return 1;
          }
          return 0;
        })
      )
      ? arr
      : undefined;
  }

  indexOf(targetNumber: number): number | undefined {
    if (!this.array) return undefined;

    if (!this.array.length) return undefined;

    if (this.array.length === 1) return this.array.indexOf(targetNumber);

    let startingIndex = 0;
    let endingIndex = this.array.length - 1;
    const originalArray = this.array;

    const handleLoop = (newArr: number[]): number => {
      const middleIndex = Math.ceil((newArr.length - 1) / 2);
      const middleIndexNumber = newArr[middleIndex];

      if (!newArr.includes(middleIndexNumber)) {
        return -1;
      }

      if (!newArr.includes(targetNumber)) {
        return -1;
      }

      if (middleIndexNumber === targetNumber) {
        // we want the index of the found middleIndexNumber in the ORIGINAL array.
        return originalArray.indexOf(middleIndexNumber);
      }

      if (middleIndexNumber < targetNumber) {
        // we just want the back part of the array
        startingIndex = newArr.indexOf(newArr[middleIndex + 1]);
        return handleLoop([...newArr.slice(startingIndex, endingIndex)]);
      } else {
        // middleIndexNumber > targetNumber; we just want the front part of the array
        endingIndex = newArr.indexOf(newArr[middleIndex - 1]);
        return handleLoop([...newArr.slice(startingIndex, endingIndex)]);
      }
    };

    return handleLoop(this.array);
  }
}
