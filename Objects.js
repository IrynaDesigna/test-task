// Merge - recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
//         Source properties that resolve to undefined are skipped if a destination value exists. 
//         Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment.
//         Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.
const merge = (obj, ...sources) => {
    for (const source of sources) {
      for (const key of Object.keys(source)) {
        if (obj[key] && typeof obj[key] === 'object') {
          if (Array.isArray(obj[key])) {
            obj[key] = [...obj[key], ...source[key]];
          } else {
            merge(obj[key], source[key]);
          }
        } else {
          if (typeof source[key] !== 'undefined') {
            obj[key] = source[key];
          }
        }
      }
    }
    return obj;
}

// Omit - this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
const omit = (obj, strings) => {
    let result = {};
    const keys = Object.keys(obj);
  
    if (!Array.isArray(strings)) {
      strings = [strings];
    }
  
    for (let i = 0; i < keys.length; i++) {
      let omitKey = false;
      for (let j = 0; j < strings.length; j++) {
        if (keys[i] === strings[j]) {
          omitKey = true;
          break;
        }
      }
      if (!omitKey) {
        result[keys[i]] = obj[keys[i]];
      }
    }
  
    return result;
  };

// Pick - creates an object composed of the picked object properties.
const pick = (obj, strings) => {
    let result = {};
    const keys = Object.keys(obj);
  
    if (!Array.isArray(strings)) {
      strings = [strings];
    }
  
    for (let i = 0; i < keys.length; i++) {
      let omitKey = true;
      for (let j = 0; j < strings.length; j++) {
        if (keys[i] === strings[j]) {
          omitKey = false;
          break;
        }
      }
      if (!omitKey) {
        result[keys[i]] = obj[keys[i]];
      }
    }
  
    return result;
};

// pickBy - Creates an object composed of the object properties predicate returns truthy for. 
//          The predicate is invoked with two arguments: (value, key).
//          Arguments: object (Object): The source object.
//          [predicate=_.identity] (Function): The function invoked per property.
//          Returns: (Object): the new object.
const pickBy = (obj,predicate) => {
    let result = {};
    for (let key in obj) {
        if (predicate(obj[key])) {
            result[key] = obj[key]
        }
    }
    return result
}

// omitBy - creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for. 
//          The predicate is invoked with two arguments: (value, key).
//          Arguments: object (Object): The source object.
//          [predicate=_.identity] (Function): The function invoked per property.
//          Returns: (Object): the new object.
const omitBy = (obj,predicate) => {
    let result = {};
    for (let key in obj) {
        if (!predicate(obj[key])) {
            result[key] = obj[key]
        }
    }
    return result
}

// toPairs - Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs.
//           If object is a map or set, its entries are returned.
//           Arguments: (Object): The object to query.
//           Returns: (Array): the key-value pairs.
const toPairs = (obj) => {
    let result = [];
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        result[i] = {[keys[i]]: obj[keys[i]]};
    }
    return result;
}

// funcObject with functions
export const funcObject = {
    merge: merge,
    omit: omit,
    pick: pick,
    toPairs: toPairs,
    pickBy: pickBy,
    omitBy: omitBy
}