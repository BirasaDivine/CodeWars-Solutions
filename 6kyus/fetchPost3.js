function fetchUsers(){
    let firstUrl='https://jsonplaceholder.typicode.com/users'
    let secondUrl='https://jsonplaceholder.typicode.com/todos'
    return Promise.all()
    .then(response=>{
        if(!response.ok){
            throw new Error("Failed to Fetch")
        }else{
            return response.json()
        }
    })
}
fetchUsers()
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.log(error)
})