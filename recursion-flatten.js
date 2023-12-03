//input: array of arrays
//output: flattened array
function flatten(arrayOfArrays){
    //base case: empty array return empty array
    if(arrayOfArrays.length === 0) return []
    if(Array.isArray(arrayOfArrays[0])) return flatten(arrayOfArrays[0]).concat(flatten(arrayOfArrays.slice(1)))
    //recursive case: slice the array
    else return [arrayOfArrays[0]].concat(flatten(arrayOfArrays.slice(1)))
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]