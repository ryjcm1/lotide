
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const tail = (arr) => {

  if (arr.length <= 1) {
    return [];
  }

  let tailArr = arr.slice(1);
  return tailArr;
};


//test case 1: Check the returned Array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//text case 2: checking that the original arr is not modified
const originalArr = [1,2,3];
const result1 = tail([1,2,3]);
assertEqual(originalArr.length, 3); //ensure we get back three elements
assertEqual(originalArr[0], 1); //ensure first element is equal to 1 and remains unchanged
assertEqual(originalArr[1], 2); //ensure second element is equal to 2 and remains unchanged
assertEqual(originalArr[2], 3); //ensure third element exist and is equal to 3
assertEqual(originalArr[0], result1[0]); //ensure both arrays are different should FAIL


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

