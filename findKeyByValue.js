
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};



const findKeyByValue = (list, value) =>{

  const listOfKeys = Object.keys(list);

  for (let key of listOfKeys) {
    if (list[key] === value) {
      return key;
    }
  }
  
  return undefined;
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


//test case:
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //should PASS

