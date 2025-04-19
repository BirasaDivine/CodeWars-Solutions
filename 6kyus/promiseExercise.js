//1 .Create a Promise that resolves with the message "Success!" 
// after 1 second or rejects with "Failure!" after 1 second, based on a random condition.
// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         if(Math.random() > 0.5){
//             resolve("Success!") 
//         }else{
//             reject("Failure!")
//         }
//     },1000);
// });

// promise 
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error) {
//     console.log("Rejected:", error);
//   });

// 2.Create a JavaScript program that converts a callback-based function into a Promise-based function.
function callbackPromise(callback){
    return new Promise(function(resolve,reject){
        callback(function(result,error){
            if(result){
                resolve("Done")
            }else{
                reject(error)
            }
        })
    })
}
callbackPromise(fetchdata).then(function(data){
    console.log(data)
})
.catch(function(data){
    console.log(data)
})