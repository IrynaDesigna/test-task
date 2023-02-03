// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
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

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
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

export const objectArr = {
  chunk: chunk,
  compact: compact
}