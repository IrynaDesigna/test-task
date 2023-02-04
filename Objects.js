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

// funcObject with functions
export const funcObject = {
    merge: merge,
    omit: omit,
    pick: pick
}