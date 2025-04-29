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


// Write a JavaScript function that takes an array of URLs and downloads the contents of each URL
//  in parallel using Promises.

function downloadContent(){
    const urls = [
                'https://jsonplaceholder.typicode.com/todos/1',
                'https://api.thecatapi.com/v1/images/search',
                'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY' 
            ];
  fetch(urls)
  .then(function(response){
        if(!response.ok){
            throw new Error(`HTTP REQUEST FAILED`)
        }else{
          return response.json()  
        }
       })
}
Promise.allSettled(urls)
    .then(function(response){
                console.log(response) 
            })
    .catch(function(error){
                console.log(error)
            })