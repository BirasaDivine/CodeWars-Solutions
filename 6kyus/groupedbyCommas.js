// Finish the solution so that it takes an input n (integer) and 
// returns a string that is the decimal representation
//  of the number grouped by commas after every 3 digits.

// Assume: 0 <= n <= 2147483647

//We have to count starting from behind three integers and add a comma .

function groupByCommas(n){
var output = '';
n = n.toString().split('').reverse().join('');
for (i=0;i<n.length;i++){
  if (i%3===0&&i!=0) output += ',';
  output+=n[i];
  
}
return output.split('').reverse().join('');
}
console.log(groupByCommas(1000000))