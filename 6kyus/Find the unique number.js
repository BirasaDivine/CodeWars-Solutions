// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let numArr={};
  // arr.forEach(element => {
  //   if(!numArr.includes(element)){
  //     numArr.push(element)
     
  //   }
  //    console.log(numArr)
  // });
  for(let num of arr){
    if(numArr[num]){
     
      numArr[num]++
    }else{
      numArr[num]=1
      
    }
  }
  for(let key in numArr){
    if(numArr[key]==1){
      return Number(key)
    }
  }
}
console.log(findUniq([ 1, 0, 0 ]))