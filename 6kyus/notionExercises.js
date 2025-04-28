// //Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
// function result(callback){ 
//     setTimeout(function(){
//         callback()
//     },2000)
// }
// function callback(){
//     console.log("Done")
// }
// result(callback)

//2.Write a JavaScript program that converts a callback-based function to a Promise-based function.
function promisify(callback){
    return new Promise(function(resolve,reject){
        callback(function(error,result){
            if(result){
                resolve("Done")
            }else{
                reject(new Error(HTTP))
            }
        }
            
        
    )
})
}
promisify().then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})

