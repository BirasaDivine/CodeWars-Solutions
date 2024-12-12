// /Write a function removeHighestOccurrence that takes an array of elements as an argument 
// and returns a new array with the highest occurring element removed. 
// removeHighestOccurrence([1, 2, 2, 3, 4, 4, 5]) // [1, 3, 5]
// removeHighestOccurrence(['a', 'b', 'b', 'c', 'c', 'c', 'd']) // ['a', 'b', 'b', 'd']
// removeHighestOccurrence([true, true, false, false, true]) // [false, false]/

function removeHighestOccurrence(array){
    const newObj={};
    for(let i=0;i<array.length;i++){
        let occurence=0;
        for(let i=0;i<array.length;i++){
            if(array[i] == array[j]){
                occurence++;
            }
        }
    }
    newObj[array[i]]=occurence;
}
console.log(newObj);