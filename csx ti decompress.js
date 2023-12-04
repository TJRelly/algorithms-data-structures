//input: str
//output: str uncompressed
function uncompress(str) {
	//create result string
  let result = ""
  let num = ""
  let numbers = "0123456789"
  //iterate the array
  for(let i = 0; i < str.length; i++) {
    //if num - save to num string
    	//test if number using number string and includes
    if(numbers.includes(str[i])) num += str[i]
  	//if not num (it's letter) add letter to result <num> times
    else {
      //parse int from num
      let repeatNum = parseInt(num)
      //add letter to result <num> times
      for (let j = 0; j < repeatNum; j++) {
        result += str[i]
      }
      //clear num variable
      num = ""
    }
  }  	 
  //return result string
  return result
}



// console.log(makeNumber("127efg")) // 127
console.log(uncompress("2c3a1t")); // -> 'ccaaat' 

console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'

console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); // -> 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'