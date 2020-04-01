const isSorted = (arr: number[]): boolean =>
  JSON.stringify(arr) ===
  JSON.stringify(
    arr.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) {
        return 1;
      }
      return 0;
    })
  );

export const getIndex = (
  arr: number[],
  target: number
): number | undefined => {
  if (!isSorted(arr)) return undefined;

};
