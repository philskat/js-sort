export function insertSorted(arr: number[], val: number): number[] {
  let tmpArr: number[] = [];
  let index = -1;

  // Check if there are elements in the array
  if (arr.length === 0) {
    tmpArr[0] = val;
    return tmpArr;
  }

  // Find index where the val should sit
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      index = i;
      break;
    }
  }

  // If no position is found add element to the back of the array
  if (index === -1) {
    tmpArr = [...arr];
    tmpArr[arr.length] = val;
    return tmpArr;
  }

  // Add the element at index
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    if (i == index) {
      tmpArr[j] = val;
      if (j + 1 < arr.length + 1) {
        tmpArr[j + 1] = arr[i];
        j++;
      }
    } else {
      tmpArr[j] = arr[i];
    }
  }

  return tmpArr;
}

export function insertionSort(arr: number[]): number[] {
  let tmpArr: number[] = [];

  // Add every single item with the insertSorted function
  for (let i = 0; i < arr.length; i++) {
    tmpArr = insertSorted(tmpArr, arr[i]);
  }

  return tmpArr;
}
