// Finish the solution so that it takes an input n (integer) and returns a string that is
//  the decimal representation of the number grouped by commas after every 3 digits.
function groupByCommas(n) {
  let lastString = []
  let array= n.toString().split("")
  for(let i=0;i<array.length;i++){
    let newString=array[array.length -1 -i]
    if((i+1)%3 ==0 && i<array.length-1){
      newString=","+newString
    }
    lastString.unshift(newString)
  }
  return lastString.join("")
}
console.log(groupByCommas(35235235))
console.log(groupByCommas(1))
console.log(groupByCommas(12))
console.log(groupByCommas(123))
console.log(groupByCommas(1234))
console.log(groupByCommas(12345))
console.log(groupByCommas(123456))