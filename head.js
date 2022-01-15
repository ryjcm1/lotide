
const assertEqual = require('./assertEqual')

const head = (arr) => {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([7,8,9]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");