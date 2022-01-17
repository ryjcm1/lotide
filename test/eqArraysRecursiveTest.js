const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArraysRecursive');

describe('eqArraysRecursive', () =>{
  it('Should return true if passed arrays that are equal', () =>{
    const input1 = [[2, 3], [4]];
    const input2 = [[2, 3], [4]];
    const expectedOutput = true;
    assert.equal(eqArrays(input1, input2), expectedOutput);
  });

  it('Should return false if passed arrays of the same length are not equal', () =>{
    const input1 = [[2, 3], [4, 3]];
    const input2 = [[2, 3], [4, 5]];
    const expectedOutput = false;
    assert.equal(eqArrays(input1, input2), expectedOutput);
  });

  it('Should return false if passed in arrays of different lengths', () =>{
    const input1 = [[2, 3], [4, 5, [8]]];
    const input2 = [[2, 3], [4, 5,]];
    const expectedOutput = false;
    assert.equal(eqArrays(input1, input2), expectedOutput);
  });


});