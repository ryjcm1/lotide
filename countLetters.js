

//strips sentences of all spaces and uncapitalizes every character
const onlyCharacters = (word) => {
  // let cleanedSentence = word.toLowerCase().split(" ").join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let cleanedSentence = word.split(" ").join("");
  return cleanedSentence;
};

//counts character occurances in a string of characters
const countLetters = (characters) => {

  const noSpaces = onlyCharacters(characters);

  let countedLetters = {};

  for (let character of noSpaces) {

    if (countedLetters[`${character}`]) {
      countedLetters[`${character}`] += 1;
    } else {
      countedLetters[`${character}`] = 1;
    }
  }

  return countedLetters;
};


module.exports = countLetters;