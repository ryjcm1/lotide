
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


module.exports = countOnly;