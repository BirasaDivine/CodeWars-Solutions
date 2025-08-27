function findOutlier(integers){
    let odd=integers.filter((int)=>int%2 !== 0)
   // return odd
    let even=integers.filter((int)=>int%2 == 0)
    return Number(even.length==1 ? even : odd)

}
console.log(findOutlier([0, 1, 2]))