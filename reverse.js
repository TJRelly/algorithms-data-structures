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

console.log(reverseStr("Hello World!"))
console.log("")
console.log(reverseStr2("Hello World!"))