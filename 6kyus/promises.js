const myName = new Promise(function(resolve,reject){
    let value="Divine"
    resolve(value);
})
const afterMath=function(){
    myName.then(function(result){
        console.log(result);
    })
}
afterMath();
 