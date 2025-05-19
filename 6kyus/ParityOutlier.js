// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//  Write a method that takes the array as an argument and returns this "outlier" N.

//[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
function findOutlier(integers){
  let evenNumbers=integers.filter((num) => num%2 === 0)
  let oddNumbers=integers.filter((num) => num%2 != 0)
  return oddNumbers
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))