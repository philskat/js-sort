import { bubbleSort } from '../src';

describe('bubbleSort', () => {
  const startingArray = [10, 2, 5, 7, 1, 3, 6, 8, 4, 9];
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr: number[] = [];

  beforeEach(() => {
    arr = startingArray;
  });

  test('Sort array', () => {
    let newArr = bubbleSort(arr);

    expect(newArr).toEqual(sortedArray);
    expect(arr).toEqual(startingArray);
  });

  test('Already sorted Array', () => {
    arr = sortedArray;

    let newArr = bubbleSort(arr);

    expect(newArr).toEqual(sortedArray);
    expect(arr).toEqual(sortedArray);
  });
});
