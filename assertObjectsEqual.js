const inspect = require('util').inspect;

const eqObjects = require('./eqObjects')


const assertObjectEquals = (actual, expected) => {

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }

};

