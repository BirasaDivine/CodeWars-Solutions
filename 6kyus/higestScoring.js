// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.


// function high(x){
//     let newString=x.toLowerCase().split("")
//     console.log(newString)
//     //let letters= new Array(26)
//     newString.forEach(element => {
//         if(/[a-z]/ .test(element)){
//             const code= element.charCodeAt()-96
//             console.log(code)
//         }
//     });
// }
// console.log(high("man i need a taxi up to ubud  xz"))

function getValue(word){
    let result = 0;
    word.split("").forEach(element => {
        result+=element.charCodeAt()-96
    });
    return result
}

function high(x){
    let word=x.toLowerCase().split(" ").sort((a,b) => {
       return getValue(b)-getValue(a)
    })
    return word[0]
}
console.log(high("man i need a taxi up to ubud  xz"))