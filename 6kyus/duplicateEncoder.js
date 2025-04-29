// The goal of this exercise is to convert a string to a new string where each character in the new string is
//  "(" if that character 
// appears only once in the original string, or ")"
//  if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let duplicate={}
    let newWord=word.toLowerCase()
    for(letter of newWord){
        if(duplicate[letter]){
            duplicate[letter]++
        }else{
            duplicate[letter]=1
        }
    }
    const result=[...newWord].map(letter => duplicate[letter] === 1 ? '(' : ')') .join("")
    return result
}
console.log(duplicateEncode("success"))