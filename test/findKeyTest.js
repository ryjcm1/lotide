const chai = require('chai');
const assert = chai.assert;

const findKey = require('../findKey');

describe('findKey', () =>{
  it('Should return noma when searching for the key of two stars', () =>{
    const input1 = {
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
    };
    const input2 = x => x.stars === 2;
    const expectedOutput = "noma";
    assert.equal(findKey(input1, input2), expectedOutput);
  });

  it('Should return undefined if requirement is not met', () =>{
    const input1 = {
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
    };
    const input2 = x => x.stars === 0;
    assert.isUndefined(findKey(input1, input2));
  });

  it('Should return undefined when the input object is empty', () =>{
    const input1 = {};
    const input2 = x => x.type === "metal";
    assert.isUndefined(findKey(input1, input2));
  });


});