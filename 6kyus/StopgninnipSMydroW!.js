// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (Just like the name of this Kata).
//  Strings passed in will consist of only letters and spaces.
//   Spaces will be included only when more than one word is present.
function spinWords(string){
  let newString=string.split(" ")
    return newString.map(word=>{
    let  newWord=word.split("")
    if(newWord.length >= 5 ){
        return newWord.reverse().join("")
    }else{
        return newWord.join("")
    }
 }).join(" ")
 
}
console.log(spinWords("Hey fellow warriors"))