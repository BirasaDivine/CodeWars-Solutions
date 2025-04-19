// //  const promise=new Promise((resolve,reject) =>{
// //     setTimeout(function(){
// //         if(Math.random() <= 0.5){
// //             resolve("SUCCESS!")
// //         }else{
// //             reject("Error")
// //         }
// //     },1000)
    
// //  })
// //  promise.then((result) => {
// //     console.log(result)
// //  })
// //  .catch(function(error){
// //     console.log(error)
// //  })


// function promisify(callback){
//     return new Promise((resolve,reject) => {
//         callback(function(error,result){
//             if(error){
//                 reject(error)
//         }else{
//             resolve(result)
//         }
//         })
//     })
// }
// function fetchdata(callback){
//     setTimeout(function(){
//         callback(null,' Here is your data')
//     },1000)
// }

// promisify(fetchdata).then((result) =>{
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })


// 3. Implement a function that fetches data from  JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos) 
//     and returns the data as a Promise. Handle any errors that may occur during the fetch.

function fetchTodos(){
    const url='https://jsonplaceholder.typicode.com/todos'
    fetch(url)
    .then(function(response){
       if(!response.ok){
        throw new Error(`HTTP Error : ${response.status}`)
       } else{
        return response.json()
       }
    })
    .then(function(data){
        return data
    })
    .catch(function(error){
        console.log(error)
        return [];
    })
}
fetchTodos().then( data=> console.log(data))