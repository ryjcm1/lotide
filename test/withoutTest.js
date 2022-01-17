const assert = require('chai').assert;
const without = require('../without')

describe('without', () =>{

  it('Should return new array of strings without ["lighthouse"]', () =>{
    const input1 = ["hello", "world", "lighthouse"];
    const input2 = ["lighthouse"];
    const expectedOutput = ["hello", "world"];
    assert.deepEqual(without(input1, input2), expectedOutput);
  });

  it('Should return new array of numbers without values in the array [5, 3, 6]', () =>{
    const input1 = [1, 4, 6, 5, 3, 2, 7 ,5];
    const input2 = [5, 3, 6];
    const expectedOutput = [1, 4, 2, 7];
    assert.deepEqual(without(input1, input2), expectedOutput);
  });

  it('Should return false when checking if new array contains a value in the array of elements to exclude', () =>{
    const input1 = [1, 4, 6, 5, 3, 2, 7 ,5];
    const input2 = [5, 3, 6];
    const expectedOutput = false;
    assert.equal(without(input1, input2).includes(5), expectedOutput);
  });


})