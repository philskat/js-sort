// Helper function for quicksort
function quickSortHelper(arr: number[], left: number, right: number): number[] {
  let index: number;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSortHelper(arr, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(arr, index, right);
    }
  }

  return arr;
}

// Sort partition of array
function partition(arr: number[], left: number, right: number) {
  const pivot = arr[Math.floor((right + left) / 2)];
  let i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  }
  return i;
}

export function quickSort(arr: number[]): number[] {
  const tmp = [...arr];
  return quickSortHelper(tmp, 0, arr.length - 1);
}
