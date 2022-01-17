const chai = require('chai');
const assert = chai.assert;

const middle = require('../middle');

describe('middle', () =>{
  it('Should return the middle two elments of an array when passed in an array with an even length', () =>{
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('Should return the middle element of an array when passed in an array with an odd length', () =>{
    const input = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('Should return an empty array when passed an empty array', () =>{
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('Should return an empty array when passed an array with a length of two or less', () =>{
    const input = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });


});