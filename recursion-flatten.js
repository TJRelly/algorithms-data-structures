//input: array of arrays
//output: flattened array
function flatten(arrayOfArrays, flat=[]) {
  //base case: when input is empty return flat array
  
  if(arrayOfArrays.length === 0) return flat
  
  //look at the first element
  if(Array.isArray(arrayOfArrays[0])) {
    //if array flatten array recursively
    flatten(arrayOfArrays[0], flat)
    //if an individual element push to flat array
  } else {
    flat.push(arrayOfArrays[0])
  }
   //recursive case: slice first el from input and store flat array
  return flatten(arrayOfArrays.slice(1), flat)
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
