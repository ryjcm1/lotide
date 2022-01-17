const chai = require('chai');
const assert = chai.assert;

const eqObjects = require('../eqObjects')

describe('eqObjects', () =>{
  it('Should return true if passed arrays that are equal', () =>{
    const input1 = {
      c: "1",
      d: ["2", 3]
    };
    const input2 = {
      d: ["2", 3],
      c: "1"
    };
    const expectedOutput = true;
    assert.equal(eqObjects(input1, input2), expectedOutput);
  });

  it('Should return false if passed in objects are not equal', () =>{
    const input1 = {
      c: "1",
      d: ["2", 3]
    };
    const input2 = {
      c: "1",
      d: ["2", 3, 4]
    }
    const expectedOutput = false;
    assert.equal(eqObjects(input1, input2), expectedOutput);
  });

  it('Should return false if passed in objects of different lengths', () =>{
    const input1 = {
      c: "1",
      d: ["2", 3]
    };
    const input2 = {
      c: "1",
      d: ["2", 3, 4],
      e: "5"
    }
    const expectedOutput = false;
    assert.equal(eqObjects(input1, input2), expectedOutput);
  });


})