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
    console.log(`🛑🛑🛑 + Assertion Failed: ${arr1} === ${arr2}`);

  }
};

//test case 1: equivalent arrays
assertArraysEqual([1, 2, 3], [1, 2, 3]); //assertion should pass

//test case 2: non-equivalent arrays
assertArraysEqual([1, 2, 3], [4, 2, 3]); //assertion should fail

//test case 3: arrays of different length
assertArraysEqual([1, 2, 3], [2, 3]); //assertion should fail

//test case 4: empty arrays
assertArraysEqual([], []); //assertion should pass