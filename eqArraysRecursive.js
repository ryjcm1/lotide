const eqArrays = (arr1, arr2) =>{

  if(arr1.length !== arr2.length) return false;

  for(let i = 0; i <= arr1.length -1; i++) {

    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
       if(!eqArrays(arr1[i], arr2[i])) return false;
    }
    else{
      if(arr1[i] !== arr2[i]) return false;
    }

  }

  return true

}




console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false

console.log(eqArrays([1,2,3,4,[5, 6]], [1,2,3,4, [5, 6]]))