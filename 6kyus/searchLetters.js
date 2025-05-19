function change(string){
  const newString=string.toLowerCase();
  let letters = new Array(26).fill(0)
  newString.split("").forEach(char => {
    if (/[a-z]/.test(char) ) {
        const code = char.charCodeAt() - 97
        letters[code] = 1
    }
  })


  return letters.join("")
}
console.log(change("aaaaaaa79345675"))