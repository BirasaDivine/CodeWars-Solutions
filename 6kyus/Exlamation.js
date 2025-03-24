// Convert the continuous blocks of exclamation marks or question marks to a digit and use these digits to form a number. If this number is a prime number, return it. If not, divide this number by the smallest factor greater than 1, until it becomes a prime number.
// You can assume that all test results are greater than 1 and the length of every continuous substring (! or ?) is less than 10.

// Examples
// "!!"              ==>   2  # prime
// "!??"             ==>   3  # 12 --> 6 --> 3
// "!???"            ==>  13  # prime
// "!!!??"           ==>   2  # 32 --> 16 --> 8 --> 4 --> 2
// "!!!???"          ==>  11  # 33 --> 11
// "!???!!"          ==>  11  # 132 --> 66 --> 33 --> 11
// "!????!!!?"       ==>  53  # 1431 --> 477 --> 159 --> 53
// "!!!!!!!???????"  ==>  11  # 77 --> 11

//Loop through s
//Count for Each Number and if it appears twice count twice
//Get a new variable to store new number
//Check if it's Prime
//If it is return the number
//If it's not Find it factors

function convert(s) {
  let newNumber = "";
  for (let i = 0; i < s.length; i++) {
    if ((newNumber[i]= s[i])) {
      newNumber = s[i]++;
      //  console.log(newNumber);
    }
    console.log(newNumber);
  }
  // console.log(newNumber);
  // return newNumber;
}
console.log(convert("1223"));
