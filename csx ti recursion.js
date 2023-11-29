// Declare a recursive function 'divisible' that takes in at least two arguments (a number, and an array of numbers). It should return true if ALL numbers in the array are equally divisible by the single number argument. If any of the numbers in the array are not equally divisible, return false.
// Once complete, write some code to test your 'divisible' function.

function divisible(num, arrOfNums) {
    //base case --- empty array return true
    if(arrOfNums.length === 0) return true
    //if not divisible by num return false
    if(arrOfNums[0] % num !== 0) return false
    //recursion will decrement array
    return divisible(num, arrOfNums.slice(1))
}

// const testArr1 = [1, 2, 3, 4];
// const testArr2 = [2, 4, 6, 8];
// const testArr3 = [2, 2, 2, 3]; 

// console.log(divisible(2, testArr1)); // FALSE -- 1 are not divisible 
// console.log(divisible(2, testArr2)); // TRUE -- all nums are divisible
// console.log(divisible(2, testArr3)); // FALSE -- 3 is not divisible 