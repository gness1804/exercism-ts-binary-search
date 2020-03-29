export default class BinarySearch {
  array: number[] | undefined;

  constructor(arr: number[]) {
    this.array = this.generateArray(arr);
  }

  generateArray(arr: number[]): number[] | undefined {
    return JSON.stringify(arr) === JSON.stringify(arr.sort()) ? arr : undefined;
  }
}
