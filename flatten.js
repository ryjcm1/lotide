
const flatten = (arr1) => {
  let flattenedArray = [];

  if (!arr1.length) {
    return flattenedArray;
  } else {
    if (Array.isArray(arr1[0])) {
      flattenedArray.push(...flatten(arr1[0]));
    } else {
      flattenedArray.push(arr1[0]);
    }

    flattenedArray.push(...flatten(arr1.slice(1)));
  }

  return flattenedArray;
  
};


module.exports = flatten;