//input 2 arrays
//output boolean
// function same(arr1, arr2) {
    
//     let map1 = arr1.reduce((obj, num) => {
//         obj[num ** 2] = ++obj[num ** 2] || 1
//         return obj
//     }, {})

//     let map2 = arr2.reduce((obj, num) => {
//         obj[num] = ++obj[num] || 1
//         return obj
//     }, {})

//     return JSON.stringify(map1) === JSON.stringify(map2)
// }

//input 2 arrays
//output boolean
function same(arr1, arr2) {
//the second arr must have the squares of each element in the first array
//if the arrays are a diff length //false
if(arr1.length !== arr2.length) return false
//loop arr // find matching index in the other arr
for (let num of arr1) {
    let index = arr2.indexOf(num**2)
    if(index === -1) {
        return false
    }
    arr2.splice(index, 1)
}
//remove the matching index // if matching index can't be found
//return false
//otherwise return true 
return true
}



console.log(same([1, 2, 3], [4, 1, 9])) //true
console.log(same([1, 2, 3], [1, 9])) //false
console.log(same([1, 2, 1], [4, 4, 1])) //false
