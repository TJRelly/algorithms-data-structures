const reverseStr = str => str.split("").reverse().join("")

const reverseStr2 = str => {
    //iterate the str backwards
    let reversed = ""
    //add to empty string
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed
}

console.log("-- Reversed String --")
console.log(reverseStr("Hello World!"))
console.log(reverseStr2("Hello World!"))
console.log("")

//function calculates the sum of all nums up to some number n
function sumToN(n) {
    //declare sum variable
    let sum = 0
    // loop through numbers from 1 to n
    for(let i = 1; i <= n; i++) {
        sum += i
    }
    //adding each to sum variable
    return sum
}

console.log("-- Sum to N --")
console.log(sumToN(5))//should return 15
console.log(sumToN(3))//should return 6
console.log("")