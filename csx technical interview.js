// Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
// For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]

//input: number
//ouput: array 
//declare func amplify
function amplify(n) {
    //declare results array
    const result = []
    //create a loop that will push i to an empty arr
    for(let i = 1; i <= n; i++) {
        //if number is divisible by 4 --- multiply by 10 then push to result
        if(i % 4 === 0) result.push(i * 10)
        //otherwise push number to results
        else result.push(i)
    }     
    //return results array  
    return result 
}

console.log(amplify(5)) //[1, 2, 3, 40, 5]
     



