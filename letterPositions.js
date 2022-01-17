
const letterPosition = (sentence) => {

  let letterOccurance = {};

  for (let i = 0; i <= sentence.length - 1; i++) {
    let current = sentence[i];

    //skips spaces
    if (current !== " ") {
      if (letterOccurance[`${current}`]) {
        letterOccurance[`${current}`].push(i);
      } else {
        letterOccurance[`${current}`] = [i];
      }
    }
  }

  return letterOccurance;
};


module.exports = letterPosition; 

// //test case: hello
// assertArraysEqual(letterPosition('hello')['h'], [0]); //should PASS
// assertArraysEqual(letterPosition('hello')['e'], [1]); //should PASS
// assertArraysEqual(letterPosition('hello')['l'], [2, 3]); //should PASS
// assertArraysEqual(letterPosition('hello')['o'], [4]); //should PASS