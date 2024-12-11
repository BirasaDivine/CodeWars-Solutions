function divisibleBy3(a,b){
    let result=[];
    for(let i=a+1 ; i<b; i++){
        result.push(i);
       if(i%3 ===0){
           result.push(`div3`)
       }
        
    }
    return result
}
console.log(divisibleBy3(1,30))