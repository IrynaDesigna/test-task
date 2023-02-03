export const chunk = (arr, len) => {
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