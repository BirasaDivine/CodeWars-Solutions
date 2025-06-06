// Write a function that takes a URL and fetches data from that
//  URL but aborts when the request takes more than 10ms.

function fetchData(){
    let url="https://httpstat.us/200?sleep=6000"
    let time= fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error("Failed to fetch")
        }else{
            return response.json()
        }
    })
    setTimeout(()=>{
        clearTimeout(time)
        console.log("Took long!")
    },10000)
}
fetchData()
.then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})


function fetchData(){
    const controller=new AbortController()
    const signal=controller.signal
    let url="https://httpstat.us/200?sleep=6000"
    let timeoutId=setTimeout(()=>{
        controller.abort()
    },5000)
    return fetch(url,{signal})
    .then(response=>{
        if(!response.ok){
            throw new Error("Failed to fetch")
        }else{
            return response.text()
        }
    })
    .catch(error=>{
        if(error.name === "AbortError"){
            throw new Error("Request Time out")
        }else{
            throw error
        }
    })
    
}
fetchData()
.then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})
