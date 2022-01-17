const chai = require('chai');
const assert = chai.assert;

const countLetters = require('../countLetters')

describe('countLetters', () =>{
  it('Should return {L : 2, H: 1} when passed in the string - LHL', () =>{
    const input = 'LHL';
    const expectedOutput = {L : 2, H: 1};
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('Should return {l : 1, i: 1, g: 1, h: 1, t: 1} when passed in the string - light', () =>{
    const input = 'light';
    const expectedOutput = {l : 1, i: 1, g: 1, h: 1, t: 1};
    assert.deepEqual(countLetters(input), expectedOutput);
  });


})