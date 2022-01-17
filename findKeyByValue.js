

const findKeyByValue = (list, value) =>{

  const listOfKeys = Object.keys(list);

  for (let key of listOfKeys) {
    if (list[key] === value) {
      return key;
    }
  }
  
  return undefined;
};


module.exports = findKeyByValue;