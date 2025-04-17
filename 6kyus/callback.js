// 1. Create a function that counts from 1 to 5, with a 1-second delay between each number, using a callback to print each number.


// function counter(callback) {
//     callback =function (){
//         for(let i=1;i<=5;i++){
//             setTimeout(() => {
//            console.log(i) 
//         }, i*1000);
//         }
//     }
//     return callback;
// }

// counter()();

//
// Create a function that takes a first name, last name, and a callback function to format them in different ways.?
// function formatName(firstName, lastName, callback) {

//     return callback(firstName,lastName)
// }
//   function inversed(firstName,lastName){
//     return `${lastName} ${firstName}`
//   }

// formatName("John", "Doe", inversed);

// Expected outputs (with different callbacks):
// "John Doe"
// "DOE, John"
// "J. Doe"

//3. Create a calculator function that takes two numbers and a callback. The callback should perform the mathematical operation.
// function calculate(num1, num2, operationCallback) {
//    return operationCallback(num1,num2)
// }
// function addition(a,b){
//     let add=a+b;
//     return add;
// }
// function multiplication(num1,num2){
//     return num1*num2;
// }
// function division(num1,num2){
//     return num1/num2;
// }
// console.log(calculate(5, 10, addition))

// Expected outputs:
// Addition callback: 15 (for 10, 5)
// Multiplication callback: 50 (for 10, 5)
// Division callback: 2 (for 10, 5)

//Create a function that filters an array based on a callback test function.
// function filterArray(array, testCallback) {
//     return testCallback(array)
// }
// function  evennumbertest(array){
//     let even=array.filter( (num) => num%2 === 0)
//     return even
// }
// console.log(filterArray( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], evennumbertest))

// function filterArray(array, testCallback) {
//     let result=[];
//     for(let num of array){
//         if(testCallback(num)){
//             result.push(num)
//         }
//     }
//     return result
// }
// function isEven(num){
//     return num%2 === 0; 
// }
// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven))

// Example array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output with: [2, 4, 6, 8, 10]
// Expected output with numbers greater than 5: [6, 7, 8, 9, 10]

// 5. Create a function that applies multiple transformations to a string using callbacks.
function transformString(text, callback1, callback2) {
    let firstResult= callback1(text);
    return callback2(firstResult)
}
  function reversedText(text){
    let newText=text.split("").reverse().join("");
    return newText
    
  }
  function uppercase(text){
    return text.toUpperCase();
  }
  console.log(transformString("hello world", reversedText,uppercase))

// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"