function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    // take in a num - convert to string - find length of string
    let digits1 = num1.toString().split("")
    let digits2 = num2.toString().split("")

    if (digits1.length !== digits2.length) return false

    
    for(let digit of digits1) {
        if(!digits2.includes(digit)) return false
    }

    return true
  }

  console.log(sameFrequency(182,281)) // true
  console.log(sameFrequency(34,14)) // false
  console.log(sameFrequency(3589578, 5879385)) // true
  console.log(sameFrequency(22,222)) // false