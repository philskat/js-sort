import { insertSorted, insertionSort } from '../src/index';

describe('insertionSort', () => {
  const startingArray = [10, 2, 5, 7, 1, 3, 6, 8, 4, 9];
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr: number[] = [];

  beforeEach(() => {
    arr = startingArray;
  });

  test('Sort array', () => {
    let newArr = insertionSort(arr);

    expect(newArr).toEqual(sortedArray);
    expect(arr).toEqual(startingArray);
  });

  test('Already sorted array', () => {
    arr = sortedArray;
    let newArr = insertionSort(arr);

    expect(newArr).toEqual(sortedArray);
    expect(arr).toEqual(sortedArray);
  });
});

describe('Insert Sorted', () => {
  test('Insert into empty array', () => {
    const arr: number[] = [];

    const newArr = insertSorted(arr, 1);

    expect(newArr).toEqual([1]);
    expect(arr).toEqual([]);
  });

  test('Sorted add entry to array', () => {
    const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    const newArr = insertSorted(arr, 4);

    expect(newArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
  });

  test('Insert to beginning of array', () => {
    const arr = [2, 3, 4, 5, 6];
    const newArr = insertSorted(arr, 1);

    expect(newArr).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr).toEqual([2, 3, 4, 5, 6]);
  });

  test('Insert to end of array', () => {
    const arr = [1, 2, 3, 4, 5];
    const newArr = insertSorted(arr, 6);

    expect(newArr).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});
