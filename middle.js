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


const middle = (arr) => {
  if (!arr) return;
  
  let arrLength = arr.length;
  if (arrLength <= 2) return [];

  if (arrLength % 2 === 0) {
    return [ arr[arrLength / 2 - 1], arr[arrLength / 2] ];
  } else {
    return [arr[Math.floor(arrLength / 2)]];
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([2, 3]), []);
assertArraysEqual(middle([3]), []);
