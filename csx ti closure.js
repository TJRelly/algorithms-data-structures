// Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
// If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
// If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

//input: function --- returns boolean
//output: function
function checkerLogger(cb) {
  //Closer - cached object
  //cached object - keeps track of true and false
  cache = {
    true: 0,
    false: 0
  }
  //declare a function "checker logger"
  //function that return boolean related to the passed in cb func
  function checker(arg) {
    //if arg has is undefined //return cache obj
    if (arg === undefined) {
      return cache
    } else {
      //else  //return true or false
      //call the cb w/ arg
      //track true or false in cache
      cb(arg) === true ? cache.true++ : cache.false++
      return cb(arg)
    }
  }
  //return checker func
  return checker
}

// Example:
const isOdd = (num) => num % 2 === 1
const oddCounter = checkerLogger(isOdd)
console.log(oddCounter()) //{ true: 0, false: 0 }
console.log(oddCounter(3)) //true
console.log(oddCounter(2)) //false
console.log(oddCounter()) //{ true: 1, false: 1 }
console.log(oddCounter(6)) //false
console.log(oddCounter()) //{ true: 1, false: 2 }
