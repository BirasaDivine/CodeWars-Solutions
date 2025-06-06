async function antiOptimizeAsync(task){
    let promise = new Promise(resolve =>{
      setTimeout(()=>{
        resolve(task())
      },11000)  
    })
    return promise
}

function task(){
  let returnValue="Hello World"
    return returnValue
}

antiOptimizeAsync(task)
.then(result =>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})