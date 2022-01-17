const eqArrays = require('./eqArrays');


const eqObjects = (obj1, obj2) => {

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

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
        return false;
      }
    }
  }

  return true;
};



module.exports = eqObjects;