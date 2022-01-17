const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArrays');

describe('eqArrays', () =>{
  it('Should return true if passed arrays that are equal', () =>{
    const input1 = [1, 2, 3];
    const input2 = [1, 2, 3];
    const expectedOutput = true;
    assert.equal(eqArrays(input1, input2), expectedOutput);
  });

  it('Should return false if passed arrays of the same length are not equal', () =>{
    const input1 = [1, 2, 3];
    const input2 = [1, 4, 3];
    const expectedOutput = false;
    assert.equal(eqArrays(input1, input2), expectedOutput);
  });

  it('Should return false if passed in arrays of different lengths', () =>{
    const input1 = [1, 2, 3];
    const input2 = [1, 2];
    const expectedOutput = false;
    assert.equal(eqArrays(input1, input2), expectedOutput);
  });


});