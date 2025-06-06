// function removeSmallest(numbers) {
// let smallest=99999999;
// for(let i=0;i<numbers.length;i++){
//   //  console.log(numbers[i])
//     if(numbers[i]<smallest)
//         smallest=numbers[i]
// }
// return smallest
// }
// console.log(removeSmallest([2,2,1,2,1]))

function removeSmallest(numbers) {
  let index = numbers.indexOf(Math.min(...numbers));
  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}
console.log(removeSmallest([2, 2, 1, 2, 1]));
