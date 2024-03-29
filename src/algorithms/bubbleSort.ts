/**
 * Sorts an array of numbers with the bubble sort algorithm
 *
 * @param arr Input array of numbers
 * @returns Sorted array of numbers
 */
export function bubbleSort(arr: number[]): number[] {
  const result = [...arr];
  for (let i = result.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (result[j] > result[j + 1]) {
        const tmp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = tmp;
      }
    }
  }

  return result;
}
