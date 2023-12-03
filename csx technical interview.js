// Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
// For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]


// Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
// If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
// If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

// Example:
// const isOdd = num => num % 2 === 1
// const oddCounter = checkerLogger(isOdd);
// oddCounter(); ->  { true: 0, false: 0 }
// oddCounter(3); -> true
// oddCounter(2); ->  false
// oddCounter(); -> { true: 1, false: 1 }

// Declare a recursive function 'divisible' that takes in at least two arguments (a number, and an array of numbers). It should return true if ALL numbers in the array are equally divisible by the single number argument. If any of the numbers in the array are not equally divisible, return false.
// Once complete, write some code to test your 'divisible' function.

// function divisible(num, arrOfNums) {
//     //base case --- empty array return true
//     if(arrOfNums.length === 0) return true
//     //if not divisible by num return false
//     if(arrOfNums[0] % num !== 0) return false
//     //recursion will decrement array
//     return divisible(num, arrOfNums.slice(1))
// }

// const testArr1 = [1, 2, 3, 4];
// const testArr2 = [2, 4, 6, 8];
// const testArr3 = [2, 2, 2, 3]; 

// console.log(divisible(2, testArr1)); // FALSE -- 1 are not divisible 
// console.log(divisible(2, testArr2)); // TRUE -- all nums are divisible
// console.log(divisible(2, testArr3)); // FALSE -- 3 is not divisible 