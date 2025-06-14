// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL 
// (https://jsonplaceholder.typicode.com/todos/1).
// The function should handle both successful responses and errors 
// (such as network issues or invalid URLs). Upon receiving a successful response, 
// it should log the fetched data to the console. 
// If there's an error, it should catch the error and log an appropriate message.


function fetchUrl(){
    const xhr=new XMLHttpRequest()
    const url='https://jsonplaceholder.typicode.com/todos/1'
    xhr.open("GET",url)
    xhr.onload=function (){
        if(xhr.status >= 200 && xhr.status < 300){
            try{
            const data=JSON.parse(xhr.responseText) 
           console.log("Fetched Data",data)
            }catch(e){
                console.log("Error Message",e.message)
            }
           
        }else{
            console.log(xhr.status,xhr.responseText)
        }
    }
    xhr.onerror=function(){
        console.error("Network Error")
    }
    xhr.send(data)
}
fetchUrl()
