
const tail = (arr) => {

  if (arr.length <= 1) {
    return [];
  }

  let tailArr = arr.slice(1);
  return tailArr;
};



module.exports = tail;