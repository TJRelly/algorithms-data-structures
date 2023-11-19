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
console.log(sumToN(100))//should return 5050
console.log(sumToN(3))//should return 6
console.log("")

// No Loop 
function sumToN2(n) {
    return n * (n + 1) / 2
}

console.log("-- Sum to N 2 --")
console.log(sumToN2(100))//should return 5050
console.log(sumToN2(3))//should return 6
console.log("")