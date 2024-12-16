// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//Initialise an array containing the vowels.
//Declare an array to store the vowels
//Get athe string and make it an array.
//Loop through the string to find the vowels.
//Push the vowels to our array and count the length

function getCount(str) {
    let stringArray=str.split(" ");
    let vowels=["a","e","i","o","u"];
    let vowelsArray=[];
    if(stringArray.includes(vowels))
    return vowelsArray;
  }
  console.log(getCount("Vowels Count Tests"))