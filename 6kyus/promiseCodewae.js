function sayJoke(apiUrl, jokeId){
   return fetch(apiUrl)
    .then(function(response){
        if(!response.ok){
            throw new Error('No jokes found id: {jokeId}')
        }else{
            return response.json()
        }
    })
}
sayJoke('http://great.jokes/christmas',101)
.then(function(result){
    result.map( jokes =>{
        console.log(jokes[jokeId])
    }  )
})
.catch(function(error){
    console.log(error)
})
