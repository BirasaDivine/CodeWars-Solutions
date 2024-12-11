// Given a String Reverse each word in the string.For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

function myWord(word){
    word=word.split(' ');
    // return word
  let newWord = word.forEach((element) => console.log(element.reverse()))
    return newWord
}
console.log(myWord("Welcome to this Javascript Guide!"))