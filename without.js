
const without = (arr1, arr2) => {
  let newList = arr1;

  for (let i = 0; i <= arr2.length - 1; i ++) {
    newList = newList.filter(x => x !== arr2[i]);
  }

  return newList;
};


module.exports = without;

