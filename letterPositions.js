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


const letterPosition = (sentence) => {

  let letterOccurance = {};

  for (let i = 0; i <= sentence.length - 1; i++) {
    let current = sentence[i];

    //skips spaces
    if (current !== " ") {
      if (letterOccurance[`${current}`]) {
        letterOccurance[`${current}`].push(i);
      } else {
        letterOccurance[`${current}`] = [i];
      }
    }
  }

  return letterOccurance;
};


//test case: hello
assertArraysEqual(letterPosition('hello')['h'], [0]); //should PASS
assertArraysEqual(letterPosition('hello')['e'], [1]); //should PASS
assertArraysEqual(letterPosition('hello')['l'], [2, 3]); //should PASS
assertArraysEqual(letterPosition('hello')['o'], [4]); //should PASS