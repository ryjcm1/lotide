const assert = require('chai').assert;
const takeUntil = require('../takeUntil')

describe('takeUntil', () =>{
  it('Should return an array of numbers before a the first value that is less than 0 appears', () =>{
    const input1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const input2 = x => x < 0;
    const expectedOutput = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(takeUntil(input1, input2), expectedOutput);
  });

  it('Should return an array of words before a comma appears', () =>{
    const input1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const input2 = x => x === ',';
    const expectedOutput = ['I\'ve', 'been', 'to', 'Hollywood'];
    assert.deepEqual(takeUntil(input1, input2), expectedOutput);
  });

  it('Should return the same array when no values match the condition', () =>{
    const input1 = [5, 2, 3, 7, 2, -8, 2, 9, 5];
    const input2 = x => x > 10;
    const expectedOutput = [5, 2, 3, 7, 2, -8, 2, 9, 5];
    assert.deepEqual(takeUntil(input1, input2), expectedOutput);
  });

  it('Should return and empty array when passed in an empty array', () =>{
    const input1 = [];
    const input2 = x => x % 2 === 0;
    assert.isEmpty(takeUntil(input1, input2));
  });


})