//Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

// jsx
// const originalObj = {aa: "1", bf: "3", cq: "5"};
// const reversedObj = reverseObject(originalObj);
// // console.log(reversedObj); 
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output
const originalObj = {aa: "1", bf: "3", cq: "5"}
function reversedObject(){
    const reversedObj={};
    const originalObj = {aa: "1", bf: "3", cq: "5"};
     
    for(let i in originalObj){
        let value=originalObj[i];
        let key=i;
      //  console.log(key)
       reversedObj[value]=key;
      // console.log(reversedObj)
    }
    return reversedObj
}
console.log(reversedObject())