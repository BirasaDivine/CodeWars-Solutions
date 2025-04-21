// // //  const promise=new Promise((resolve,reject) =>{
// // //     setTimeout(function(){
// // //         if(Math.random() <= 0.5){
// // //             resolve("SUCCESS!")
// // //         }else{
// // //             reject("Error")
// // //         }
// // //     },1000)
    
// // //  })
// // //  promise.then((result) => {
// // //     console.log(result)
// // //  })
// // //  .catch(function(error){
// // //     console.log(error)
// // //  })


// // function promisify(callback){
// //     return new Promise((resolve,reject) => {
// //         callback(function(error,result){
// //             if(error){
// //                 reject(error)
// //         }else{
// //             resolve(result)
// //         }
// //         })
// //     })
// // }
// // function fetchdata(callback){
// //     setTimeout(function(){
// //         callback(null,' Here is your data')
// //     },1000)
// // }

// // promisify(fetchdata).then((result) =>{
// //     console.log(result)
// // })
// // .catch((error) => {
// //     console.log(error)
// // })


// // 3. Implement a function that fetches data from  JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos) 
// //     and returns the data as a Promise. Handle any errors that may occur during the fetch.

// function fetchTodos(){
//     const url='https://jsonplaceholder.typicode.com/todos'
//     fetch(url)
//     .then(function(response){
//        if(!response.ok){
//         throw new Error(`HTTP Error : ${response.status}`)
//        } else{
//         return response.json()
//        }
//     })
//     .then(function(data){
//         return data
//     })
//     .catch(function(error){
//         console.log(error)
//         return [];
//     })
// }
// fetchTodos().then( data=> console.log(data))

// Implement a function that fetches data from  JSONPlaceholder API 
// (https://jsonplaceholder.typicode.com/todos) 
// and returns the data as a Promise. Handle any errors that may occur during the fetch


// function fetchTodos(){
//     const url='https://jsonplaceholder.typicode.com/todos'
//    return  fetch(url)
//     .then(function(response){
//         if(!response.ok){
//             throw new Error(`No Response : ${response.status}`)
//         }else{
//             return response.json()
//         }
//     })
//     .catch(function(error){
//         return error
//     })
    
// }
//     fetchTodos()
//     .then(function(data){
//         console.log(data)
//     })

// Write a function that takes an array of URLs, fetches data from each URL concurrently 
// using Promise.all(), and returns the combined results.
  

    // function fetchData(){
    //     const urls = [
    //         'https://jsonplaceholder.typicode.com/todos/1',
    //         'https://api.thecatapi.com/v1/images/search',
    //         'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY' 
    //     ];
    //     return Promise.all( urls.map(url => 
    //         fetch(url)
    //         .then(function(response){
    //         if(!response.ok){
    //             throw new Error(`HTTP ERROR: ${response.status}`)
    //         }else{
    //             return response.json()
    //         }
    //     })
    //     .catch(function(error){
    //         return error
    //     })) )
        
    // }
    // fetchData().then(function(data){
    //     console.log(data)
    // })


    // Create a function that returns a Promise which rejects
    //  if given an invalid input (e.g., negative number). Use .catch() to handle the error when calling this function.


    // function rejecting(){
    //     let number;
    //     return new Promise(function(resolve,reject){
    //         if(number>0){
    //             resolve("Resolved")
    //         }else{
    //             reject(new Error("Number is less than 0"))
    //         }
    //     })
    // }
    // rejecting(-9)
    // .then(function(result){
    //     console.log(result)
    // })
    // .catch(function(error){
    //     console.log(error)
    // })

    // Create a function that receives a string and returns a Promise. 
    // The promise should resolve with the uppercase version of the string but reject if the string is null or undefined.

//     function promisify(str){
//         return new Promise(function(resolve,reject){
//            if(str === null || str === undefined){
//             reject(new Error ("The string is undefined"))
//            } else{
//             resolve(str.toUpperCase())
//         }
//     })
// }   
//     promisify(98)
//     .then(function(result){
//         console.log(result)
//     })
//     .catch(function(error){
//         console.log(error)
//     })


//Create a JavaScript program that converts a callback-based function into a Promise-based function.

function promisify(callback){
    return new Promise(function(resolve,reject){
        callback (function(error,result){
            {
                if(result){
                    resolve("Solved")
                }else
                {    
                    reject(error)
                }
                
            }
        })
    })
}
function fetchData(callback){
    setTimeout(function(){
        callback(null,'Here is your data')
    },1000)
}


promisify(fetchData)
    .then(function(result){
        console.log(result) 
    })
    .catch(function(error){
        console.log(error)
    })
    
