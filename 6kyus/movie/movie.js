const input = document.querySelector("input");
const movieGenerator = document.querySelector("button");
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWVlZmExMDFkMjZkNTA3Mjk1ZmE5Y2QxZjMyM2Q1YSIsIm5iZiI6MTc0Njc4MDE0Mi4xOTgwMDAyLCJzdWIiOiI2ODFkYmZlZTkwODQxNjQxODRiMWNjZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6Afxs9q2nrZGTbUNtjicT11ACPNU_kjpcjoC3VOGZBo'
  }
};

 function searchMovie(){
    let query;
fetch(`https://api.themoviedb.org/3/search/movie?query=${query}r&include_adult=false&language=en-US&page=1`, options)
  .then(response=>{
    if(!response.ok){
        throw new Error()
    }else{
        return response.json()
    }
  })
  .catch(err => console.error(err));
 }
searchMovie.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})
