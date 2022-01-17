const expect = require('chai').expect
const flatten = require('../flatten')


describe('flatten', () =>{

  it('Should return an empty array if passed in an empty array', () =>{
    const input = [];
    const expectedOutput = [];
    expect(flatten(input)).to.deep.equal(expectedOutput)
  });


  it('Should return the same array if passed a single-leveled array', () =>{
    const input = [1, 2, 3, 4, 5, 6, 7];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
    expect(flatten(input)).to.deep.equal(expectedOutput)
  });


  it('Should return a single-leveled array when passed in a nested array', () =>{
    const input = [1,2, [3, 4] , [5, 6, [7]]];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
    expect(flatten(input)).to.deep.equal(expectedOutput)
  });


  it('Should return a single-leveled array when passed a deeply nested array', () =>{
    const input = [[1, [2, [3]]], [4,5, [6, 7, [8, 9 ]]], 10];
    const expectedOutput = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(flatten(input)).to.deep.equal(expectedOutput)
  });


})