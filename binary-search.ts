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
}
