
const eqObjects = (obj1, obj2) =>{
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    const current1 = obj1[key];
    const current2 = obj2[key];
    
    if (typeof current1 === 'object' && typeof current2 === 'object') {
      if (!eqObjects(current1, current2)){ return false};
    }else{

      if (obj1[key] !== obj2[key]) return false; 
    }
    
  }
  
  return true;
};




module.exports = eqObjects;