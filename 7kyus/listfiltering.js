// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(l) {
    let arrayOfStrings=l.filter(item => typeof item === 'number');
    return arrayOfStrings;
     
   // Return a new array with the strings filtered out
 }
 console.log( filter_list([1,2,'a','b']))
 //Another Way
 function filter_list(l) {
    for(let i = l.length - 1; i >= 0; i--){
        if(typeof l[i] !== 'number'){
            l.splice(i,1);
        }
    }
   return l
 // Return a new array with the strings filtered out
}