// function getState(promise) {
//     promise.then(result=>{
//         console.log("Fulfilled")
//     })
//     .catch(error =>{
//         console.log("Rejected")
//     })
//     let Fulfilled=Promise.race([promise,"Pending"])
    
// }

function getState(promise) {
    return Promise.race([promise,"Pending"])
        .then(result=>{
            if(result="Pending"){
                console.log("Pending") 
            }else{
                 console.log("Fulfilled")
            }
           
        })
        .catch(error =>{
            console.log("Rejected")
        });
}

const resolvedPromise = Promise.resolve();
// const rejectedPromise = Promise.reject();
const pendingPromise = new Promise(() => {});

getState(pendingPromise)