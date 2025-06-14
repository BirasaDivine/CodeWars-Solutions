// Implement a timeout for an asynchronous fetch request. 
// If the request takes longer than(5 milliseconds), it should be aborted.
// https://jsonplaceholder.typicode.com/users.
function fetchRequest(){
    let controller=new AbortController()
    let url='https://jsonplaceholder.typicode.com/users'

    let timer= setTimeout(() =>{
        controller.abort()
    },90)
    let fetchedData= fetch(url,{signal:controller.signal})
    .then(response =>{
        if(!response.ok){
            throw new Error("Failed to fetch!")
        }else{
            return response.json()

        }
    })
    clearTimeout(timer)
    return fetchedData
}
fetchRequest()
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.log(error)
})