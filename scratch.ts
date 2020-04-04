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
  targetNumber: number
): number | Error => {
  if (!isSorted(arr)) return new Error("Error: array is not sorted.");
  if (!arr.length)
    return new Error(
      "Error: empty array. Array needs at least one number in it."
    );
  if (arr.length === 1) return arr.indexOf(targetNumber);

  let startingIndex = 0;
  let endingIndex = arr.length - 1;
  const originalArray = arr;

  const handleLoop = (newArr: number[]): number | Error => {
    const middleIndex = Math.ceil((newArr.length - 1) / 2);
    const middleIndexNumber = newArr[middleIndex];

    if (!newArr.includes(middleIndexNumber) || !newArr.includes(targetNumber)) {
      return new Error("Number not found.");
    }

    if (middleIndexNumber === targetNumber) {
      // we want to index of the found middleIndexNumber in the ORIGINAL array.
      return originalArray.indexOf(middleIndexNumber);
    }

    try {
      if (middleIndexNumber < targetNumber) {
        // we just want the back part of the array
        startingIndex = newArr.indexOf(newArr[middleIndex + 1]);
        return handleLoop([...newArr.slice(startingIndex, endingIndex)]);
      } else {
        // middleIndexNumber > targetNumber; we just want the front part of the array
        endingIndex = newArr.indexOf(newArr[middleIndex - 1]);
        return handleLoop([...newArr.slice(startingIndex, endingIndex)]);
      }
    } catch (error) {
      return new Error(`Error in handleLoop: ${error}`);
    }
  };

  return handleLoop(arr);
};
