// Chunck - creates an array of elements split into groups the length of size. 
//          If array can't be split evenly, the final chunk will be the remaining elements.
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

// Compact - creates an array with all falsey values removed. 
//           The values false, null, 0, "", undefined, and NaN are falsey.
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
  if (n === 0) return result;
  if (n >= arr.length) return arr;
  for (let i = 0; i < n; i++) {
    result[i] = arr[i];
  }
  return result;
}

// Includes - Checks if value is in collection. 
//            If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. 
//            If fromIndex is negative, it's used as the offset from the end of collection.
const includes = (collection, value, fromIndex = 0) => {
  if (typeof collection === 'string') {
    return collection.indexOf(value, fromIndex) !== -1;
  }

  if (Array.isArray(collection)) {
    for (let i = fromIndex; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
    return false;
  }

  if (typeof collection === 'object') {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      if (collection[keys[i]] === value) {
        return true;
      }
    }
    return false;
  }
};

// Find - Iterates over elements of collection, returning the first element predicate returns truthy for. 
//        The predicate is invoked with three arguments: (collection, value, index|key).
function find(array, value, startFrom = 0) {
  if (typeof value === 'function') {
    for (var i = startFrom; i < array.length; i++) {
      if (value(array[i])) {
        return array[i];
      }
    }
    return undefined;
  } else if (typeof value === 'object' && !Array.isArray(value)) {
    for (let i = startFrom; i < array.length; i++) {
      let match = true;
      for (const key in value) {
        if (array[i][key] !== value[key]) {
          match = false;
          break;
        }
      }
      if (match) {
        return array[i];
      }
    }
  } else if (Array.isArray(value)) {
    for (let i = startFrom; i < array.length; i++) {
      if (array[i][value[0]] === value[1]) {
        return array[i];
      }
    }
  } else if (typeof array[0] === 'object') {
    for (let i = startFrom; i < array.length; i++) {
      if (array[i][value]) {
        return array[i];
      }
    }
  } else {
    for (let i = startFrom; i < array.length; i++) {
      if (array[i] === value) {
        return array[i];
      }
    }
  }
  return undefined;
}

// Filter - Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
//          The predicate is invoked with three arguments: (value, index|key, collection).
//          Arguments: collection (Array|Object): The collection to iterate over.
//                     [predicate=_.identity] (Function): The function invoked per iteration.
//          Returns: (Array): Returns the new filtered array.
const filter = (collection, predicate) => {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if ( typeof predicate === 'function' && predicate(collection[i]) === true) {
      result[result.length] = collection[i];
    };
    if (typeof predicate === 'object' && typeof collection[i] === 'object') {
      let match = true;
      for (let key in predicate) {
        if (collection[i][key] !== predicate[key]) {
          match = false;
          break;
        }
      }
      if (match) {
        result[result.length] = collection[i];
      }
    };
    if (Array.isArray(predicate) && typeof collection[i] === 'object') {
      if(collection[i][predicate[0]] === predicate[1]) {
        result[result.length] = collection[i];
      }
    };
    if (typeof predicate === 'string' && typeof collection[i] === 'object') {
        if (collection[i][predicate] === true) result[result.length] = collection[i];
    }
    if (collection[i] === predicate) {
      result[result.length] = collection[i];
    }
  }
  return result;
};

// Map - Creates an array of values by running each element in collection thru iteratee. 
//       The iteratee is invoked with three arguments: (value, index|key, collection).
//       Arguments: collection (Array|Object): The collection to iterate over.
//                  [iteratee=_.identity] (Function): The function invoked per iteration.
//       Returns: (Array): Returns the new mapped array.
const map = (collection, predicate) => {
  let result = [];
  if (typeof collection === "object" && !Array.isArray(collection)) {
    for (let key in collection) {
      if ( typeof predicate === 'function') {
        result[result.length] = predicate(collection[key]);      
      }; 
    }   
  }
  for (let i = 0; i < collection.length; i++) {
    if ( typeof predicate === 'function') {
      result[result.length] = predicate(collection[i]);      
    };
    if (typeof predicate === 'string' && typeof collection[i] === 'object') {
        result[result.length] = collection[i][predicate];
    }
  }
  return result;
};

// ZIP - Creates an array of grouped elements, the first of which contains the first elements of the given arrays, 
//       the second of which contains the second elements of the given arrays, and so on.
//       Arguments: [arrays] (...Array): The arrays to process.
//       Returns: (Array): Returns the new array of grouped elements.
const zip = (...arrays) => {
  let result = [];
  let length = arrays[0].length;
  for (let i = 0; i < length; i++) {
    resultItem = [];
    for (let j = 0; j < arrays.length; j++) {
      resultItem[resultItem.length] = arrays[j][i];
    }
    result[result.length] = resultItem;
  }
  return result;
}

// object Array with functions
export const objectArr = {
  chunk: chunk,
  compact: compact,
  drop: drop,
  take: take,
  includes: includes,
  find: find,
  filter: filter,
  map: map,
  zip: zip
}