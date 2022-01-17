
const assertEqual = require('./assertEqual')


const findKey = (obj, callback) => {

  let keys = Object.keys(obj);

  for (let key of keys) {

    let current = obj[key];

    if (callback(current)) {
      return key;
    }

  }
};


module.exports = findKey;