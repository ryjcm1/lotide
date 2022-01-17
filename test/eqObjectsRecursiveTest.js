const chai = require('chai');
const assert = chai.assert;

const eqObjects = require('../eqObjectsRecursive')

describe('eqObjectsRecursive', () =>{
  it('Should return true if passed objects that are equal', () =>{
    const input1 = { a: { z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 2 };
    const expectedOutput = true;
    assert.equal(eqObjects(input1, input2), expectedOutput);
  });

  it('Should return false if passed objects of different lengths', () =>{
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 2 };
    const expectedOutput = false;
    assert.equal(eqObjects(input1, input2), expectedOutput);
  });

  it('Should return false when passed objects of the same length but different values ', () =>{
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 =  { a: { y: 0, z: 1 }, b: 4 };
    const expectedOutput = false;
    assert.equal(eqObjects(input1, input2), expectedOutput);
  });


})