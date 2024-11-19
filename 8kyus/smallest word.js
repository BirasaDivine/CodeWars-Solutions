// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
//Find the length of the smallest word in the string
const string="this is the best";
//Loops through a string using for loop

    var sentences=string.split(' ');
    var mapping=sentences.map(function(sentence){
        return sentence.length;
    });
    
    console.log(Math.min(...mapping))
