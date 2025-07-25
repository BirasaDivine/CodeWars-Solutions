// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let newString=str.toLowerCase().split("")
    let results={}
    for(letter of newString){
      
        if(results[letter]){
            
            results[letter]++
            
        }else{
            results[letter]=1
        }
        
    }
    if(results.x === results.o){
        return true
    }else{
        return false
    }
}
console.log(XO("zzoo"))