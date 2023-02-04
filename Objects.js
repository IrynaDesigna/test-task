// Merge - recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
//         Source properties that resolve to undefined are skipped if a destination value exists. 
//         Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment.
//         Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.
function merge(obj, ...sources) {
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
  
// funcObject with functions
export const funcObject = {
    merge: merge
}