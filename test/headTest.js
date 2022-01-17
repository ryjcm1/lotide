const chai = require('chai');
const assert = chai.assert;

const head = require('../head')

describe('head', () =>{
  it('Should return the first element when passed in an array of numbers (index 0)', () =>{
    const input = [ 5, 6, 7, 8];
    const expectedOutput = 5;
    assert.equal(head(input), expectedOutput);
  });

  it('Should return the first element when passed in an array of strings (index 0)', () =>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = "Hello";
    assert.equal(head(input), expectedOutput);
  });

  it('Should not return the second element when passed in an array of strings', () =>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = "Lighthouse";
    assert.notEqual(head(input), expectedOutput);
  });

  it('Should throw an error when the input is undefined', () =>{
    assert.throws(head, "Error");
  });


})