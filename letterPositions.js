
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

