const assert = require('chai').assert;
const map = require('../map');

describe('map', () =>{
  it('Should return the first character of every string in the array', () =>{
    const input1 = ["ground", "control", "to", "major", "tom"];
    const input2 = x => x[0];
    const expectedOutput = ["g", "c", "t", "m", "t"];
    assert.deepEqual(map(input1, input2), expectedOutput);
  });

  it('Should return and empty array when passed in an empty array', () =>{
    const input1 = [];
    const input2 = x => x[0];
    const expectedOutput = [];
    assert.deepEqual(map(input1, input2), expectedOutput);
  });


});