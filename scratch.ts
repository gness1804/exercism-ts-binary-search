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

export const getIndex = (arr: number[], target: number): number | undefined => {
  if (!isSorted(arr)) return undefined;
  if (!arr.length) return undefined;
  if (arr.length === 1) return arr.indexOf(target);

  let startingIndex = 0;

  const arrLenIsEven = !(arr.length % 2);

  if (arrLenIsEven) {
    startingIndex = arr.length / 2;
  } else {
    startingIndex = Math.ceil(arr.length / 2) - 1;
  }
  const selectedNumber = arr[startingIndex];

  if (selectedNumber === target) return startingIndex;

  const newArr =
    selectedNumber > target
      ? arr.slice(0, startingIndex)
      : arr.slice(startingIndex + 1);

  return getIndex(newArr, target);
};
