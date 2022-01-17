const chai = require('chai');
const assert = chai.assert;

const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue', () =>{
  it('Should return a match when a value matches the input object', () =>{
    const input1 = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const input2 = "The Wire";
    const expectedOutput = "drama";
    assert.equal(findKeyByValue(input1, input2), expectedOutput);
  });


  it('Should return undefined when the value does not match anything in the input object', () =>{
    const input1 = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const input2 = "The 70s show";
    assert.isUndefined(findKeyByValue(input1, input2));
  });


});