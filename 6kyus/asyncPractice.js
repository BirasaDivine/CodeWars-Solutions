//THESE ARE ASYNC EXERCISES
// Write an async function that returns a string after waiting for 2 seconds. 
// Use the setTimeout function to simulate the delay.


// async function stringify(){
//     const promise=new Promise(function(resolve,reject){
//         setTimeout(function(){
//            const str="Resolved"
//            resolve(str)
//         },2000)
//     })

//     const message= await promise
//     return message
// }
// stringify().then(function(result){
//     console.log(result)
// })

// Implement a series of async functions that perform arithmetic operations: 
// one function adds two numbers, another multiplies the result by 2, and a third subtracts 5.
//  Chain these functions using await.

// async function addition(num1,num2){
//     let addition=num1+num2;
//         return addition
// }
// async function multiplication(addition){
//     let multipy=addition * 2;
//     let result= await addition()
//     return result
// }
// async function subtraction(addition){
//     let sub=addition - 5;
//     let lastResult= await multiplication()
//     return lastResult
// }

// async function addition(num1,num2){
//     return num1+num2
// }
// async function multiplication(sum){
//     return sum*2
// }
// async function subtraction(product){
//     return product - 5;
// }

// async function arithmeticFunctions(){
//     let sum= await addition(2,4)
//     let product= await multiplication(sum)
//     let lastResult= await subtraction(product)
//     console.log(lastResult)
// }
// arithmeticFunctions();


// Write an async function that takes multiple Promises and uses Promise.race() 
// to return the result of the first Promise that resolves or rejects.

// let firstPromise=new Promise(function(resolve,reject){
//     if(Math.random() < 0.5){
//         resolve("Resolved first")
//     }else{
//         reject(new Error("Rejected First"))
//     }
// })
// let SecondPromise=new Promise(function(resolve,reject){
//     if(Math.random() > 0.5){
//         resolve("Resolved second")
//     }else{
//         reject(new Error("Rejected Second"))
//     }
// })
// let thridPromise=new Promise(function(resolve,reject){
//     if(Math.random() < 0.7){
//         resolve("Resolved Third")
//     }else{
//         reject(new Error("Rejected Third"))
//     }
// })
// Promise.race([firstPromise,SecondPromise,thridPromise]).then(function(result){
//     console.log(result) 
// })
// .catch(function(error){
//     console.log(error)
// })
// Create three async functions that simulate different tasks
//  (e.g., fetching user data, fetching posts, fetching comments). Ensure they execute in sequence using await.

// fetch("https://api.example.com/users/1")
// fetch("https://api.example.com/posts")
// fetch("https://api.example.com/comments")
// async function fetchUser(){
//     let url='https://jsonplaceholder.typicode.com/users/1'
//     try{
//         const response= await fetch(url)
//         if(!response.ok){
//             throw new Error(`No response ${response.status}`)
//         }else{
//             return  response.json()
//         }
    
//     }
//     catch(error){
//         return error
//     }
// }
// async function fetchPost(userId){
//     let url = 'https://jsonplaceholder.typicode.com/posts'
//     try{
//         const response= await fetch(url)
//         if(!response.ok){
//             throw new Error( `Response error ${response.status} `)
//         }else{
//             const posts= await response.json()
//            return posts.filter(post => post.userId === userId)
//         }
//     }
//     catch(error){
//         return error
//     }
// }
// async function result(){
//     const user=await fetchUser();
//     const post=await fetchPost(user.id)
//     console.log({user,post})
// }
// result()
// Write an async function that attempts to divide two numbers. 
// If the denominator is zero, throw an error and handle it gracefully using a try/catch block.
// async function division(num1,num2){
//     try{
        
//         if(num2 === 0){
//             throw new Error('The denominator is zero')
//         }else{
//             return num1/num2
//         }
//     }
//     catch(error){ 
//         throw error
//     }
// }

// division(12,0).then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })




// Create three async functions that simulate different tasks
//  (e.g., fetching user data, fetching posts, fetching comments). Ensure they execute in sequence using await.


async function fetchUser(){
    const url='https://jsonplaceholder.typicode.com/users/1'
    let response = await fetch(url)
    if( !response.ok){
        throw new Error(`Response failed ${response.status}`)
    }else{
        return await response.json()
    }
}
async function fetchPost(userId){
    const url='https://jsonplaceholder.typicode.com/posts'
    const response= await fetch(url)
    if(!response.ok){
        throw new Error(`POST NOT AVAILABLE ${response.status}`)
    }else{
        posts= await response.json()
        return posts.filter(post => post.userId === userId)
    }
}
async function fetchComment(postId){
    const url='https://jsonplaceholder.typicode.com/comments'
    const response= await fetch(url)
    if(!response.ok){
        throw new Error(`POST NOT AVAILABLE ${response.status}`) 
    }else{
        comments= await response.json()
        return comments.filter(comment => comment.postId === postId)
    }
}
async  function fetchData(){
    try{
        let user=await fetchUser()
    let post=await fetchPost(user.id)
    let comment= await fetchComment(post[0].id)
    console.log({user,post,comment})
    }
    catch(error){
        console.log(error)
    }
    
}
fetchData();