//Multiple Pointers

function countUniqueValues(arr) {
    let uniqueVals = []
    //use pointers to push to unique values arr
    let first = 0
    let second = 1
    //push first to uniqueVals
    uniqueVals.push(arr[first])
    while(second < arr.length) {
        //everytime second isn't equal push to uniqueVals
        if (arr[first] !== arr[second]) uniqueVals.push(arr[second])
        first++
        second++
    }

    return arr.length ? uniqueVals.length : 0
}

console.log(countUniqueValues([])) //0
console.log(countUniqueValues([1, 1, 1, 1, 2])) //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) //7
console.log(countUniqueValues([-2, -1, -1, 0, 1])) //4
