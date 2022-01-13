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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);

  }
};


const middle = (arr) => {

  let length = arr.length;

  if (!length) return;
  if (length <= 2) return [];

  const midPoint = length / 2;

  if (length % 2 === 0) {
    return [arr[midPoint - 1], arr[midPoint]];
  } else {
    return [arr[Math.floor(midPoint)]];
  }

};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([2, 3]), []);
assertArraysEqual(middle([3]), []);