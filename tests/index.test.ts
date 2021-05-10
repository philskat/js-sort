import { bubblesort, quicksort } from '../src/index';

describe('sorting', () => {
  let arr: number[] = [10, 2, 5, 7, 1, 3, 6, 8, 4, 9];

  beforeEach(() => {
    arr = [10, 2, 5, 7, 1, 3, 6, 8, 4, 9];
  });

  test('bubblesort', () => {
    const newArr = bubblesort(arr);

    expect(newArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr).toEqual([10, 2, 5, 7, 1, 3, 6, 8, 4, 9]);
  });

  test('quicksort', () => {
    const newArr = quicksort(arr);

    expect(newArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr).toEqual([10, 2, 5, 7, 1, 3, 6, 8, 4, 9]);
  });
});
