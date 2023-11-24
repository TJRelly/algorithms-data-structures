//input 2 arrays
//output boolean
function same(arr1, arr2) {
    
    let map1 = arr1.reduce((obj, num) => {
        obj[num ** 2] = ++obj[num ** 2] || 1
        return obj
    }, {})

    let map2 = arr2.reduce((obj, num) => {
        obj[num] = ++obj[num] || 1
        return obj
    }, {})

    return JSON.stringify(map1) === JSON.stringify(map2)
}

console.log(same([1, 2, 3], [4, 1, 9])) //true
console.log(same([1, 2, 3], [1, 9])) //false
console.log(same([1, 2, 1], [4, 4, 1])) //false
