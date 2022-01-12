
const inspect = require('util').inspect;


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



const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let keyValue in obj1) {
    // console.log(`comparing ${obj1[keyValue]} and ${obj2[keyValue]}`)

    if (!obj2[keyValue]) return false;

    if (Array.isArray(obj2[keyValue]) && !eqArrays(obj2[keyValue], obj1[keyValue])) {
      return false;
    }


  }

  return true;
};


const assertObjectEquals = (actual, expected) => {
  
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {
    console.log(`Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
    
  }

};



assertObjectEquals({ a: '1', b: 2 }, { a: '1', b: 2 });