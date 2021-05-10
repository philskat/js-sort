import { quickSort } from '../src/index';

describe('QuickSort', () => {
  const startingArray = [10, 2, 5, 7, 1, 3, 6, 8, 4, 9];
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let arr: number[] = [];

  beforeEach(() => {
    arr = startingArray;
  });

  test('Sort array', () => {
    let newArr = quickSort(arr);

    expect(newArr).toEqual(sortedArray);
    expect(arr).toEqual(startingArray);
  });

  test('Already sorted array', () => {
    arr = sortedArray;

    let newArr = quickSort(arr);

    expect(newArr).toEqual(sortedArray);
    expect(arr).toEqual(sortedArray);
  });
});
