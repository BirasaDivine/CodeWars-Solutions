function change(string){
  let letters = new Array(26).fill(0)
  string.toLowerCase().split("").forEach(element => {
    if(/[a-z]/.test(element)){
    const code=element.charCodeAt() -97
    letters[code]=1
    }
  });
  return letters.join("")


  
}
console.log(change("aaaaaaa79345675"))