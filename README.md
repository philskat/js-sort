[![Node.js CI](https://github.com/philskat/js-sort/workflows/Node.js%20CI/badge.svg)](https://github.com/philskat/js-sort/actions/workflows/npm-ci.yml)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@philskat/js-sort)](https://bundlephobia.com/result?p=@philskat/js-sort)
[![npm](https://img.shields.io/npm/v/@philskat/js-sort)](https://www.npmjs.com/package/@philskat/js-sort)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/philskat/js-sort)

# js-sort

This npm package contains a few sorting algorithms to sort arrays of numbers.

## Quick Sort

```js
const { quickSort } = require('@philskat/js-sort');

const arr = quickSort([3, 1, 2]); // Output: [1, 2, 3]
```

## Bubble Sort

```js
const { bubbleSort } = require('@philskat/js-sort');

const arr = bubbleSort([3, 1, 2]); // Output: [1, 2, 3]
```

## Insertion Sort

```js
const { insertionSort } = require('@philskat/js-sort');

const arr = insertionSort([3, 1, 2]); // Output: [1, 2, 3]
```

## Insert Sorted

Add a new entry to an array and sort that entry in the array.

```js
const { insertSorted } = require('@philskat/js-sort');
const arr = [1, 2, 4, 5];

arr = insertSorted(arr, 3); // Output: [1, 2, 3, 4, 5]
```
