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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];

//Test Cases

//testing expected output of a regular case
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); //should PASS


//testing expocted output when arr is empty
assertArraysEqual(map([], word => word[0]), []); //should PASS


//tesing expected output when function has no use
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]); //should PASS