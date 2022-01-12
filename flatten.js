const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }

  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);

  }
};

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



//test case 1: equivalent arrays
assertArraysEqual(flatten([1,2, [3, 4] , [5, 6, [7]]]), [1, 2, 3, 4, 5, 6, 7]); //assertion should pass

//test case 2: already flatten array
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]); //assertion should pass

//test case 3: deeply nested array
assertArraysEqual(flatten([[1, [2, [3]]], [4,5, [6, 7, [8, 9 ]]], 10]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //assertion should pass