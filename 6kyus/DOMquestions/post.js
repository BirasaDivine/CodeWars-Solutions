// Fetch and Display a Post's Title and Body
//  Description: Fetch post with ID 5 and display its title and body in the page

// let postContainer=document.getElementById("post")

// function fetchPost(){

//     return fetch('https://jsonplaceholder.typicode.com/posts/5')
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Failed tp fetch")
//         }else{
//             return response.json()
//         }
//     })
// }
// fetchPost()
// .then(data =>{
    
//     const  title=document.createElement("h2")
//     const  body=document.createElement("p")
//     title.textContent=data.title
//     body.textContent=data.body
//     postContainer.appendChild(title)
//     postContainer.appendChild(body)
    
// })
// .catch(error =>{
//     console.log(error)
// })

// 2.Display Error If User Not Found
//  Description: Try fetching a non-existent user and show a custom error message.
// let postContainer=document.getElementById("post")
//  function fetchUser(){
//     return fetch('https://jsonplaceholder.typicode.com/users/999')
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("User not found")
//         }else{
//             return response.json()
//         }
//     })
    
//  }
//  fetchUser()
//  .then(data =>{
//     console.log(data)
//  })
//  .catch(err =>{
//     const error=document.createElement("h1")
//     error.textContent=err.message
//     postContainer.appendChild(error)
//  })
// 3.List All Titles of Posts from User ID 1
//  Description: Fetch posts and list all titles of userId 1 as bullet points.

// window.onload = function() {
//   fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then(res => res.json())
//     .then(posts => {
//       let list = '<ul>';
//       posts.forEach(post => list += `<li>${post.title}</li>`);
//       list += '</ul>';
//       document.getElementById('result').innerHTML = list;
//     });
//  };
//  Show Whether Todo Is Completed with Color
//  Description: Fetch a todo and show the status in green (completed) or red (not completed).

// let postContainer=document.getElementById("post")

// function fetchTodos(){
//     return fetch('https://jsonplaceholder.typicode.com/todos/7')
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Failed to fetch")
//         }else{
//             return response.json()
//         }
//     })
// }
// fetchTodos()
// .then(data=>
//     {   
//         const status=document.createElement("p")
//         status.textContent=data.title
//         if(data.completed === "false"){
        
        
//         status.style.color="red"
//     }else{
//         status.style.color="green"
//     }
//     postContainer.appendChild(status)
//     }
// )
// .catch(error=>{
//     console.log(error)
// })
// 5. Add a Button to Fetch User Data
//  Description: Only fetch and display user info when a button is clicked.

// let postContainer=document.getElementById("post")
// let button =document.getElementsByClassName("fetchButton")
// function displayUser(){
//     return fetch('https://jsonplaceholder.typicode.com/users/2')
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Failed to fetch")
//         }else{
//             return response.json()
//         }
//     })
// }

// button.addEventListener("click",  () =>{
//     postContainer.innerHTML=""
// displayUser()
// .then(data =>{
//     const info=document.createElement("p")
//     info.textContent=data
//     postContainer.appendChild(info)
// })
// .catch(err =>{
//     console.log(err)
// }
// )
// })
// 1. Write a JavaScript function that changes the background color of the body (HTML tag) every 100ms.
// 2. Make it so that it brings a random color each time.
let body=document.getElementsByTagName("body")
function changeBackground(){
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    body.style.backgroundColor="rgb(0,0,0)"

}

