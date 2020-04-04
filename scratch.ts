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
  let endingIndex = arr.length - 1;

  const findIndexInner = (): number => {

    const middleIndex = Math.floor((startingIndex + endingIndex) / 2);

    const selectedNumber = arr[middleIndex];

    if (selectedNumber === target) return middleIndex;

    if (selectedNumber > target) {
      startingIndex = middleIndex + 1;
      return findIndexInner();
    } else {
      endingIndex = middleIndex - 1;
      return findIndexInner();
    }
  };
  findIndexInner();
};
