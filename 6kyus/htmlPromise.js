// Write a JavaScript a function that makes an HTTP GET request and returns 
// a Promise that resolves with the response data.


// function get(url){
//    return  fetch(url)
//    .then(function(response){
//     if(!response.ok){
//         throw new Error(`HTTP REQUEST FAILED`)
//     }else{
//       return response.json()  
//     }
//    })
// }
// get('https://api.example.com/data')
// .then(function(response){
//             console.log(response) 
//         })
// .catch(function(error){
//             console.log(error)
//         })

Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.