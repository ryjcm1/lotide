const assertEqual = require('./assertEqual');


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
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => should PASS
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => should PASS
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),  false); // => should PASS