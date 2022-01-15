
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





//Test cases

//case where callback succeeds
assertEqual((findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2)), "noma"); // should PASS


//case where callback fails to run true
assertEqual((findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 0)), undefined); // should PASS


//Case where object is empty
assertEqual((findKey({}, x => x.type === "metal")), undefined); // should PASS