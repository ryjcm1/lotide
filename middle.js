

const middle = (arr) => {

  let length = arr.length;

  if (length <= 2) return [];

  const midPoint = length / 2;

  if (length % 2 === 0) {
    return [arr[midPoint - 1], arr[midPoint]];
  } else {
    return [arr[Math.floor(midPoint)]];
  }

};

module.exports = middle;