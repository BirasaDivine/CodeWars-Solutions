// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.
function lucky_sevens(array){
    let newArray=[];
    let sum=0;
    sum=array[0]+array[1]+array[2];
    if(sum=7){
        console.log("True")
    }else{
        console.log("False")
    }
    
//    return sum;
}
console.log(lucky_sevens([1,7,3,4,5,6,7,8]))


/////Not done