// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal 
// representation of the number grouped by commas after every 3 digits.
// 35235235  ->  "35,235,235"
function num(n) {
  let  stringify=n.toString().split("")
  let newArray=[]
  for(let i=stringify.length-1;i>=0;i--){
    newArray.push(stringify[i])
    if( i%3 === 0 && i !== 0){

      newArray.splice(i,0,",")
      console.log(newArray)
      
    }
  }
 // return stringify
}
console.log((num(35235235)))