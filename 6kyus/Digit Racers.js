// Many of the digits, zero through nine showed up for a race one day.
// The digit with the most occurences in the input string got 1st place.
// The digit that had the second most occurences got 2nd place, and so on it went, possibly all the way to 10th place.
// When there were ties, the digit with the largest index in the input string was listed first, 2nd largest index listed next, and so on.
// Digits that didnt make it to the race were listed at the bottom in ascending order like this as example "Absent digits: 3, 7".
// If none of the digits were absent from the race, the bottom of the winners list would display "All digits present".
// The end of each line has a break except for the last.
function digitRacers(str) {
  let result = {};
  for (let number of str.split("")) {
    //console.log(numbers);
    if (result[number]) {
      // console.log(result[number]);
      result[number]++;
      // console.log(result[number]);
    } else {
      result[number] = 1;
    }
  }
  return result;
}
console.log(digitRacers("7171"));
