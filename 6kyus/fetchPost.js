 async function fetchPost(){

    const fetchResponse = await fetch("https://jsonplaceholder.typicode.com/todos/",{
        method: "post",
        body: JSON.stringify({
            
            "userId": 1,
            "title": "delectus aut autem",
             "completed": false
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
  }

    })
    
    

//     return fetch("https://jsonplaceholder.typicode.com/todos/",{
//         method: "post",
//         body: JSON.stringify({
            
//             "userId": 1,
//             "title": "delectus aut autem",
//              "completed": false
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//   }

//     })
    .then(function(response){
        if(!response.ok){
            throw new Error(`Fetch failed ${response.status}`)
        }else{
            return response.json()
        }
    })
    return fetchResponse
}
fetchPost()
    .then(function(result){
        console.log(result)
    })
    .catch(function(error){
        console.log(error)
    })