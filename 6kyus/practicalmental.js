//1.Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds.
// const controller=new AbortController()
// const signal=controller.signal;
//  function generatNumber(signal){
//     let intervaloutId=setInterval(function(){
//             console.log(Math.random())
//         },2000)
//         signal.addEventListener('abort', function() {
//       clearInterval(intervaloutId);
      
//     }); 
// }
// setTimeout(function(){
//     controller.abort()
// },8000)
// generatNumber(signal)

//2.Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms.

// async function fetchData() {
//     const controller=new AbortController()
//     const signal=controller.signal;
//     setTimeout(function(){
//     controller.abort()
// },1000)
//     return fetch('https://jsonplaceholder.typicode.com/todos/1',{signal})
//     .then(function(response){
//         if(!response.ok){
//             throw new Error( `Fetch Failed!`)
//         }else{
//             return response.json()
//         }
//     })
// }
// fetchData()
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     if (error.name === 'AbortError') {
//       console.log('Fetch aborted');
//     } else {
//       console.error('Fetch error:', error);
//     }
// })
//3.Write a JavaScript function that fetches data from an API and retries the request a specified number of
 //times if it fails. You should log to the console “Retrying….” when retrying the request.

let retryCount = 0;


 const fetchWithRetryMechanism = async (url, maxRetries = 3) => { 
    try {
        const response = await fetch(url);
        const data = await response.json()
        console.log('This is the response', data, response)
    } catch (error) {
        //console.log('This is the error', error)
        if(retryCount < maxRetries){
            // fetchWithRetryMechanism()
            retryCount += 1;
            console.log('Retrying...')
        }else{
            console.log(`API fetch error ${error}`)
        }
    }
 }
 fetchWithRetryMechanism("https://jsonplaceholder.typicode.com/todos/1")

















// function retrying(retry){
//     let response= fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function(response){
//         if(!response.ok){
//             throw new Error('Failed Response')
//         }else{
//             return response.json()
//         }
//     })
//     .catch(function(error){
//         if(retry > 0){
//             return response.json()
//         }else{
//             throw new Error(`Max retries exceeded. Last error: ${error}`)
//         }
//     })
// }

// retrying(10)
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })

