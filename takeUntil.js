
const takeUntil = (array, callback) =>{

  let newArr = [];

  for (let value of array) {
    if (callback(value)) {
      return newArr;
    }
    newArr.push(value);
  }

  return newArr;

};

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



//Test Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); //should PASS

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); //should PASS

console.log('---');

//test case in which no values pass the callback function
const data3 = [5, 2, 3, 7, 2, -8, 2, 9, 5];
const results3 = takeUntil(data3, x => x > 10);
assertArraysEqual(results3, [5, 2, 3, 7, 2, -8, 2, 9, 5]); //should PASS


//intial array is empty
const data4 = [];
const results4 = takeUntil(data4, x => x % 2 === 0);
assertArraysEqual(results4, []); //should PASS
