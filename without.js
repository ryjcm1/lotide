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

const without = (arr1, arr2) => {
  let newList = arr1;

  for (let i = 0; i <= arr2.length - 1; i ++) {
    newList = newList.filter(x => x !== arr2[i]);
  }

  return newList;
};

//Test case 1 : array should not be mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //should PASS

//Text case 2:
let testWords = ["Lighthouse", "Labs", "Lotide"];
let editedTestWords =  without(testWords, ["Labs"]);
console.log(editedTestWords); //should evaluate to ["Lighthouse", "Lotide"]
assertArraysEqual(testWords, editedTestWords); //should FAIL