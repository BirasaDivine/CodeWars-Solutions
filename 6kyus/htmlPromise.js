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

// function downloadContent(){
//     const urls = [
//                 'https://jsonplaceholder.typicode.com/todos/1',
//                 'https://api.thecatapi.com/v1/images/search',
//                 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY' 
//             ];
//   let fetchApis=urls.map( url => {
//      return fetch(url)
//     .then(function(response){
//         if(!response.ok){
//             throw new Error(`HTTP REQUEST FAILED`)
//         }else{
//           return response.json()  
//         }
//        })
//     .catch(function(error){
//         console.log(error)
//         throw error
//     })
//   })
  

// Promise.allSettled(fetchApis)
//     .then(function(results){
//         results.forEach(result => {
//             if(result.status === "fulfilled"){
//                 console.log(result.value)
//             }else{
//                 console.log(result.reason)
//             }
//         } )
    
//             })
//     .catch(function(error){
//                 console.log(error)
//             })
// }
// downloadContent()

//Write a JavaScript program that implements a function 
//that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

// async function first(num1,num2){
//     return num1*num2;
// }
// async function second(sum){
//     return sum*2;
// }
// async function third(product){
//     return product/4;
// }

// async function result(){
//     try{
//      let sum= await first(0,6)
//    let product= await second(sum)
//    let division = await third(product)
//    console.log(division)
//     }
//     catch(error){
//         console.log(error)
//     }
   
// }
// result()

// Write a JavaScript function that fetches data from multiple APIs concurrently 
// and returns a combined result using Promises and 'Promise.all()'.


function fetchUrl(){
    const urls = [
                        'https://jsonplaceholder.typicode.com/todos/1',
                        'https://api.thecatapi.com/v1/images/search',
                        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY' 
                    ];
    let fetchApis=urls.map(url => 
        fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }else{
            return response.json()
        }
    })
    .catch(function(error){
        console.log(error)
        throw error
    })
)
    Promise.all(fetchApis)
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})
}
