const assert = require('chai').assert;
const letterPositions = require('../letterPositions')

describe('letterPositions', () =>{
  it('Should return {L : [0, 2], H: [1]} when passed in the string - LHL', () =>{
    const input = 'LHL';
    const expectedOutput = {L : [0, 2], H: [1]};
    assert.deepEqual(letterPositions(input), expectedOutput);
  });

  it('Should return {l : [0], i: [1], g: [2], h: [3], t: [4]} when passed in the string - light', () =>{
    const input = 'light';
    const expectedOutput = {l : [0], i: [1], g: [2], h: [3], t: [4]};
    assert.deepEqual(letterPositions(input), expectedOutput);
  });


})