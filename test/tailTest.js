const chai = require('chai');
const assert = chai.assert;

const tail = require('../tail')

describe('tail', () =>{
  it('Should return the last element when passed in an array of numbers', () =>{
    const input = [ 5, 6, 7, 8];
    const expectedOutput = [6, 7, 8];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('Should return the last element when passed in an array of strings', () =>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('Should not return the first element when passed in an array of strings', () =>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = "Hello";
    assert.notDeepEqual(tail(input), expectedOutput);
  });

  it('Should return an empty array when passed in an empty array', () =>{
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });


})