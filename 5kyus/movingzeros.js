// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let newArray=[]
    for( let elements of arr){
        //console.log(elements)
        if(elements !== 0){
            newArray.push(elements)
        }else{
            newArray[newArray.length-1].push(elements)
        }
        console.log(newArray)
    }
 // return arr
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))