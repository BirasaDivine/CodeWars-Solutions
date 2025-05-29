// Write a javascript function that displays a number 
// every two seconds and stops displaying after 5 seconds.

    const controller=new AbortController()
    const signal=controller.signal
    function generatNumber(signal){
        let timer=setInterval(function(){
        console.log(Math.random())
    },2000)
    signal.addEventListener("abort",function(){
        clearInterval(timer)
    })
    }
    

setTimeout(function(){
    controller.abort()
},5000)
generatNumber(signal)

// Write a function that takes a URL and fetches data from that URL 
// but aborts when the request takes more than 10ms



function fetchData(){
    const controller=new AbortController()
    const signal=controller.signal
    let url='https://jsonplaceholder.typicode.com/todos/1'
    let timeId=setTimeout(function(){
    controller.abort()
},1000)
    return fetch(url,{signal})
    .then(function(response){
        clearTimeout(timeId)
    if( !response.ok){
        throw new Error(`Fetch Failed ${response.status}`)
    }else{
        return response.json()
    }
})
}
fetchData()
.then(function(data){
    console.log(data)
})
.catch(function(error){
    if(error.name === 'AbortError'){
        console.log("Fetch Aborted")
    }else{
        console.log(error)
    }
})
// Write a JavaScript function that fetches data from an API and retries
//  the request a specified number of times if it fails. 
// You should log to the console “Retrying….” when retrying the request.

// let retryTimes=0
// async function retry(url,maxtries){
//     try{
//         let response= await fetch(url)
//         if(!response.ok){
//             throw new Error("Faitch Failed")
//         }else{
//             return  await response.json()
//         }
//     }
//     catch(error){
//         if(retryTimes<maxtries){
//             console.log("Retrying")
//             retry=+1
//             return retry(url,maxtries)
//         }else{
//             throw new Error("Retry Stopped")
//         }
//     }
// }
// retry(`https://jsonplaceholder.typicode.com/todos/1`,3)
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.log(error)
// })

// let retryTries=1;
// async function retrying(url,maxRetries){
//     return fetch(url)
//     .then(response=>{
//         if(!response.ok){
//             throw new Error('Fetch Failed')
//         }else{
//             return response.json()
//         }
//     })
//     .catch(error=>{
//     if(retryTries>maxRetries){
//         console.log("Retrying")
//         retryTries=+1
//     }else{
//         console.log(error)
//     }
// })
// }
// retrying(`https://jsonplaceholder.typicode.com/todos/1`,3)
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.log(error)
// })


