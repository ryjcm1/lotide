const assertEqual = require('./assertEqual')


const eqArrays = (arr1, arr2) => {

  //unequal length base case
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }

  return true;
};

//Test case 1: equivalent arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

//Test case 2: non-equivalent arrays
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false); // => should PASS

//Test case 3: arrays of different length
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS


module.exports = eqArrays;