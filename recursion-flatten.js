//input: array of arrays
//output: flattened array
function flatten(arrayOfArrays, flat=[]){
    //base case: empty input array will return an empty array
    if(arrayOfArrays.length === 0) return flat
    //if the first element of the array is an array, run recursion on that element
    //otherwise push first element to result
    if(Array.isArray(arrayOfArrays[0])) flatten(arrayOfArrays[0], flat)
    //recursive case: push the first element of array into the empty array
    else flat.push(arrayOfArrays[0])

    return flatten(arrayOfArrays.slice(1), flat)
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]