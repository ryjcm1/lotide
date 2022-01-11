
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 + Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const countOnly = (allItems, itemsToCount) => {
  
  let countedObject = {};

  for (let item of allItems) {
    if (itemsToCount[`${item}`] === true) {
      if (countedObject[`${item}`]) {
        countedObject[`${item}`] += 1;
      } else {
        countedObject[`${item}`] = 1;
      }
    }
  }

  return countedObject;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);