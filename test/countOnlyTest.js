const chai = require('chai');
const assert = chai.assert;

const countOnly = require('../countOnly')

describe('countOnly', () =>{
  it('Should return an object with the number of occurances of the names that have value of true', () =>{
    const input1 = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const input2 = {
      "Jason": true,
      "Fang": true,
      "Karima": true,
      "Agouhanna": false
    };

    const output = {
      "Jason": 1,
      "Fang": 2,
    }
    
    assert.deepEqual(countOnly(input1, input2), output);
  });

  it('Should return undefined for the key of Karima in the newly outputed array ', () =>{
    const input1 = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const input2 = {
      "Jason": true,
      "Fang": true,
      "Karima": true,
      "Agouhanna": false
    };

    
    assert.isUndefined(countOnly(input1, input2)['Karima']);
  });


})