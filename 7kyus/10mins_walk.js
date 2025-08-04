function isValidWalk(walk) {
   
    if(walk.length !== 10) {
        return false;
    }
    
    let count1 = 0;
    let count2 = 0;
    
    for(let char of walk) {
        if(char === 'n') {
            count1 ++; 
        } if(char === 's') {
            count1 --; 
        } if(char === 'e') {
            count2++; 
        } if(char === 'w') {
            count2--; 
        }
    }
    return count1 === 0 && count2 === 0; 
}
//console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); 
console.log(isValidWalk(['w','e','w','e','w','e','w','e', 'w', 'e', 'w', 'e']));
//console.log(isValidWalk(['w'])); 
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); 