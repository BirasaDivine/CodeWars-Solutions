// function fetchData(){
//     return    new Promise(function(resolve,reject){
//       setTimeout(function() {
//         let success=Math.random()>0.5;
//         success ? resolve("Data Retrieved") : reject("Failet to retrive")
//         }, 2000);
    
//     })
// }
// fetchData()
// .then( data => console.log(data))
// .catch( error => console.log(error))
// .finally( () => console.log("Operation completed"))

















// let promise = new Promise( function(resolve , reject ){
//     const user = {
//         name : "Divine",
//         email : "birasa@gmail.com",
//         password : "divine32"
//     }
//     resolve(user)
// })
// promise.then(function (user){
//     console.log(user)
// })
// .catch(function (error){
//     console.log("No user")
// })
// .then(function (){
//     console.log("Done fetching the user")
// })

// let validateUser = function(userId,password){
//     return new Promise(function(resolve,reject){
//         if(userId && password){
//             resolve("Authenticated")
//         }else{
//             reject({message:"userId and password not authenticated"})
//         }
//     })
// }
//   const app= async (function (){
//         const data = {
//             userId : "",
//             password : "",
//         }
//       try{
//         const result= await validateUser(data)
//          console.log(result)
//       } catch(e){
//         console.log(e.message)
//       }
        
//   })
//   app();




