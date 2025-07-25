// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal 
// representation of the number grouped by commas after every 3 digits.
// 35235235  ->  "35,235,235"
function num(n) {
  let  stringify=n.toString().split("").reverse()
  //console.log(stringify)
  let newArray= stringify.map((num,i) =>{
  if((i+1) % 3=== 0 && i !==0){
      return ","+num
    } else {
    return num
    }
  })
  return newArray.reverse().join("")
}
console.log((num(35235235)))