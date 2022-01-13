const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
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


//recursive method
const eqObjects = (obj1, obj2) =>{
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    const current1 = obj1[key];
    const current2 = obj2[key];
    
    if (typeof current1 === 'object' && typeof current2 === 'object') {
      return eqObjects(current1, current2);
    }
    
    if (current1 !== current2) return false;
    
  }
  
  return true;
};

//test cases

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};
assertEqual(eqObjects(cd, dc), true); // => should PASS


const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => should PASS

const ac = {
  a: "1",
  b: 2,
  c: [1, "2", 3]
};
const ca = {
  a: "3",
  b: 3,
  c: [1, "2", 3]
};
assertEqual(eqObjects(ac, ca), false); // => should PASS


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

console.log(eqObjects({ a: '1', b: 2 }, { a: '1', b: 2 }));




//Loop method

// const eqObjects = (obj1, obj2) => {

//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);

//   //check number of keys
//   if (obj1Keys.length !== obj2Keys.length) return false;


//   for (let keyValue of obj1Keys) {

//     //case where key does not exist
//     if (!obj2[keyValue]) return false;

//     //key exist and value is an array
//     if (Array.isArray(obj1[keyValue])) {
//       if (!eqArrays(obj2[keyValue], obj1[keyValue])) {
//         return false;
//       }
//     }
//     //key exist but value is not an array
//     else {
//       if (obj2[keyValue] !== obj1[keyValue]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };