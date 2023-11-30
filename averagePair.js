// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// function averagePair(integers, target) {
//     for (let i = 0; i < integers.length; i++) {
//         for(let j = 0; j < integers.length; j++)
//         if((integers[i] + integers[j])/2 === target) return true
//     }
//     return false
// }
// //Time: O(n^2)
// //Space: O(1)

function averagePair(arr, target) {
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let average = ((arr[start] + arr[end]) / 2)
        if(average === target) return true
        else if(average < target) start++
        else end--
    }
    return false
}

// Time: O(n)
// Space: O(1)

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
