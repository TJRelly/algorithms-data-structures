// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

//they must have the same length
//comparison
//they must have the same frequency of letters
//nested for loops O(n^2)

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false

  let arr1 = str1.split("")
  let arr2 = str2.split("")

  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
        //if char is found on other array splice it
        if(arr1[i] === arr2[j]) {
            arr2.splice(j, 1)
        }
        //if char not found return false
    }
  }
  return arr2.length ? false : true
}



console.log(validAnagram("", "")) // true
console.log(validAnagram("aaz", "zza")) // false
console.log(validAnagram("anagram", "nagaram")) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram("awesome", "awesom")) // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")) // false
console.log(validAnagram("qwerty", "qeywrt")) // true
console.log(validAnagram("texttwisttime", "timetwisttext")) // true
