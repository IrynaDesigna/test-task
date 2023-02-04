// Chunck - creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
const chunk = (arr, len) => {
  let result = [];
  let chunk = [];
  let chunkIndex = 0;
  let resultIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    chunk[chunkIndex] = arr[i];
    chunkIndex++;
    if (chunkIndex === len || i === arr.length - 1) {
      result[resultIndex] = chunk;
      resultIndex++;
      chunkIndex = 0;
      chunk = [];
    }
  }
  return result;
}

// Compact - creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
const compact = (arr) => {
  const falsey = [false, null, 0, '', undefined, NaN];
  let result = [];
  let resultIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let isFalsey = false;
    for (let j = 0; j < falsey.length; j++) {
      if (item === falsey[j]) {
        isFalsey = true;
        break;
      }
    }
    if (!isFalsey) {
      result[resultIndex] = item;
      resultIndex++;
    }
  }
  return result;
}

// Drop - creates a slice of array with n elements dropped from the beginning
const drop = (arr, n=1) => {
  let result = [];
  let resultLength = arr.length - n;
  if (arr.length <= n) return result;
  if (n === 0) return arr;
  let i = 0;
  while (resultLength !== 0 ) {
    result[i] = arr[arr.length - resultLength];
    resultLength--;
    i++;
  }
  return result;
}

//  Take - creates a slice of array with n elements taken from the beginning
const take = (arr, n=1) => {
  let result = [];
  if (n === 1) return result[0] = arr[0];
  if (n === 0) return result;
  if (n >= arr.length) return arr;
  for (let i = 0; i < n; i++) {
    result[i] = arr[i];
  }
  return result;
}

// object Array with functions
export const objectArr = {
  chunk: chunk,
  compact: compact,
  drop: drop,
  take: take
}