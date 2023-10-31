function areThereDuplicates(...args) {
    //frequency counter
    //convert array to object
    //if any value = 2 return true else false
    let i = 0
    for (let j = 1; j < args.length; j++){
        if(args[i] === args[j]) {
            i++
            args[i] = args[j]
        }
        console.log(i, j)
    }
    return i > 0 ? true : false
  }

  console.log(areThereDuplicates(1, 2, 3)) // false
  console.log(areThereDuplicates(1, 2, 2)) // true 
  console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 