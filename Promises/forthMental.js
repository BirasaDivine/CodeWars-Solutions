// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1).
// The function should handle both successful responses and errors (such as network issues or invalid URLs). 
// Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message

function fetchToDo(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    const request=new XMLHttpRequest()
    request.open("GET",url,true)
    request.onload=function(){
        if(request.status >=200 && request.status<300){
            try{
                const data=JSON.parse(request.responseText)
                console.log("Fetched Data",data)
            }
            catch(e){
                console.error("Error",e.message)
            }
        }else{
            console.log(request.status,request.statusText)
        }
    }
    request.onerror=function(){
        console.error("Network error or invalid URL.")
    }
    request.send()
    
}
fetchToDo()
