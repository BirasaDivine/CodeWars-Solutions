// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
//First loop through the word(make it an array)
//Check if it includes the voewls 
//Save it in a new array
//Count the length
function getCount(str) {
     let vowels=["a","e","i","o","u"]
    let newString=str.split("")
    //newString.includes(vowels)
   let count=newString.filter((letter) => vowels.includes(letter))
    return count.length
}
console.log(getCount("ao a kak ushakov lil vo kashu kakao"))