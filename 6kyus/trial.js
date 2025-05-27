// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1).
//  The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response,
//  it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.
const { XMLHttpRequest } = require("xmlhttprequest");
const request = new XMLHttpRequest()
request.open("GET",'https://jsonplaceholder.typicode.com/posts/1',true)
request.onload=function(){
    if(request.status ===200){
        const data=JSON.parse(request.responseText)
        console.log(data)
    }else{
        console.log("Error:",request.statusText)
    }
}
request.onerror=function (){
    console.log("Network Error")
}
request.send()
