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