const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 + Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  else {
    for (let i = 0; i < arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
  }

  return true
}

//Test case 1: equivalent arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

//Test case 2: non-equivalent arrays
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true); // => should Fail

//Test case 3: arrays of different length
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should pass
