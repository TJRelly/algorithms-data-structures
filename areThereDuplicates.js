function areThereDuplicates(...args) {
    //frequency counter
    //convert array to object
    //if any value = 2 return true else false
    let obj = args.reduce((obj, curr) => {
        obj[curr] ? obj[curr]++ : obj[curr] = 1
        return obj
    }, {})

    for(let key in obj) {
        if(obj[key] === 2) return true
    }

    return false
  }

  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 