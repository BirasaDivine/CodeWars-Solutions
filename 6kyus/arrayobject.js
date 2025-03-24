// Write a function that takes an array of objects, where each object has a category property and a value property (which is a number).
//  The function should return a new object where the keys are the categories and the values are the sum of the value properties for that category.

 const data = [
     { category: "A", value: 10 },
    { category: "B", value: 20 },
     { category: "A", value: 15 },
     { category: "C", value: 5 },
    { category: "B", value: 25 },
   ];
// console.log(aggregated); // Output: { A: 25, B: 45, C: 5 }
//cREATE AN EMPTY OBJECT
//LOOP THROUGH THE ARRAY
//IF THE PROPERTY IS ALREADY THERE ADD IT AND RETURN THE SUM
function propertyValue(){
    let result={}
    
    for(let i of data ){
        let category = i.category;
        let value=i.value;
       if(result[category]=category){
        result[category]=value++;
       }else{
        result[category]=value; 
       }
       
    }
    return result
    
}
console.log( propertyValue(data))