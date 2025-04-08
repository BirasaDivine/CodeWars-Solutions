// The goal of this exercise is to convert a string to a new string where each character in the new 
// string is "(" if that character appears only once in the original string, or ")" if that character
//  appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
function  duplicateEncode(word){
   
    word=word.split("");
    let newString={};
    word.forEach(element => {
    newString[element]=(newString[element] || 0)+1;
    });
    
    let arrayString=word.map(element => newString[element] > 1 ? ")" : "(")
    
    return arrayString.join("")
    
}
console.log( duplicateEncode("recede"))