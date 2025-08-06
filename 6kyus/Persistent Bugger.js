// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.
//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
function persistence(num) {
  let iterations = 0;
  let number = num.toString().split("");
  while (number.length > 1) {
    //console.log(number)
    let init = 1;
    let result = number.reduce((acc, curr) => acc * curr, init);
    // console.log(result)
    iterations++;
    // console.log(iterations)
    number = result.toString().split("");
    // console.log(number)
  }
  return iterations;
}
console.log(persistence(999));
