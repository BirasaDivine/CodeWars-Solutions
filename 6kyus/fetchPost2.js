// Write a javascript function that posts on an api and returns the response
// url: https://jsonplaceholder.typicode.com/todos/
// body: 
// {
//   "userId": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

// function fetchUser(){
//     const url='https://jsonplaceholder.typicode.com/todos/'
//     return fetch(url,{
//         method: "POST",
//         headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//      "userId": 1,
//    "title": "delectus aut autem",
//   "completed": false
//   })
//     })
//     .then(response =>{
//         if(!response.ok){
//             throw new Error("Failed to Fetch!")
//         }else{
//             return response.json()
//         }
//     })
// }
// fetchUser()
// .then(data =>{
//     console.log(data)
// })
// .catch(error =>{
//     console.log(error)
// })



// async function fetchUser(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/todos/')
//         const data=await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.error("Error:",error.message)
//     }
// }
// fetchUser()




// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails. 
// You should log to the console “Retrying….”
//  when retrying the request.|

async function retrying(){
   const url=[
    'https://dummyjson.com/posts','https://jsonplaceholder.typicode.com/posts','https://this-may-not-exist.com/posts'
   ]
   try{
    const fetches= url.map((i) =>fetch(i))

    const response=await Promise.any(fetches)
    if(!response.ok){
        throw new Error("Fetch Failed")
    }else{
        return response.json()
    }
    
   }
   catch(error){
    console.error(error)
   }

}
retrying()


