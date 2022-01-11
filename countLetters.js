
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 + Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//strips sentences of all spaces and uncapitalizes every character
const onlyCharacters = (word) => {
  // let cleanedSentence = word.toLowerCase().split(" ").join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let cleanedSentence = word.toLowerCase().split(" ").join("");
  return cleanedSentence;
};

//counts character occurances in a string of characters
const countLetters = (characters) => {

  let countedLetters = {};

  for (let character of characters) {

    if (countedLetters[`${character}`]) {
      countedLetters[`${character}`] += 1;
    } else {
      countedLetters[`${character}`] = 1;
    }
  }

  return countedLetters;
};


assertEqual(countLetters(onlyCharacters('LHL'))['l'], 2); //should PASS
assertEqual(countLetters(onlyCharacters('LHL'))['h'], 1); //should PASS