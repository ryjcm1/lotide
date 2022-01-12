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

  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  //check number of keys
  if (obj1Keys.length !== obj2Keys.length) return false;


  for (let keyValue of obj1Keys) {

    //case where key does not exist
    if (!obj2[keyValue]) return false;

    //key exist and value is an array
    if (Array.isArray(obj1[keyValue])) {
      if (!eqArrays(obj2[keyValue], obj1[keyValue])) {
        return false;
      }
    }
    //key exist but value is not an array
    else {
      if (obj2[keyValue] !== obj1[keyValue]) {
        return false
      }
    }
  }

  return true;
};



const assertObjectEquals = (actual, expected) => {

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }

};



assertObjectEquals({
  a: '1',
  b: 2
}, {
  a: '1',
  b: 2
});