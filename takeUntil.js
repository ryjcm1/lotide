
const takeUntil = (array, callback) =>{

  let newArr = [];

  for (let value of array) {
    if (callback(value)) {
      return newArr;
    }
    newArr.push(value);
  }

  return newArr;

};

module.exports = takeUntil;

