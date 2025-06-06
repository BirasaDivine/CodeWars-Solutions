// Write a JavaScript function that fetches data from an API and retries the request
//  a specified number of times if it fails.
// You should log to the console “Retrying….” when retrying the request.

// function fetchData(maxTries){
//     let url="https://api.thisdomaindoesnotexist1234.com"
//     function attemptFetch(tryNumber){
//          return fetch(url)
//     .then(response =>{
//         if(!response.ok){
//                 throw new Error("Max Tries reached!")
//         }else{
//             return response.json()
//         }
//     })
//     .catch(error =>{
//         if(tryNumber<maxTries){
//             console.log("Retrying")
//             tryNumber+=1
//             return attemptFetch(tryNumber+1)
//         }else{
//             throw new Error("Max Tries reached")
//         }
//     }) 
//     }
//    return attemptFetch(1)
// }
// fetchData(3)
// .then(result=>{
//     console.log(result)
// })
// .catch(error =>{
//     console.log(error)
// })

async function fetchData(){
    let url="https://api.thisdomaindoesnotexist1234.com"
    let tries=1;
    for(let i=0;i<=tries;i++){
        let response= await fetch(url)
        if(response.ok){
            return response.json()
        }
        console.log("Retrying...")
    }

    console.log("Maximun Tries reached")
    return null;
}
fetchData()
.then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})