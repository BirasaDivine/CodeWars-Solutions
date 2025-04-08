/*
You are given a 5-day sales report as a JSON object.
Each day contains an array of 8 sales amounts.
Your task is to return an array of the most frequent sales amount for each day.
If there is a tie, return the amount that appears last in the day's array.

```js

const salesReport = {
"sales": [
[100, 150, 200, 200, 200, 180, 150, 120],  
[300, 320, 300, 300, 320, 320, 320, 350], 
[500, 500, 450, 450, 450, 450, 500, 500],  
[600, 750, 750, 800, 800, 800, 750, 600],  
[900, 950, 950, 900, 900, 1000, 1000, 1000] ]
};
//output : [200, 320, 500, 800, 1000]
*/
const salesReport = {
  sales: [
    [100, 150, 200, 200, 200, 180, 150, 120],
    [300, 320, 300, 300, 320, 320, 320, 350],
    [500, 500, 450, 450, 450, 450, 500, 500],
    [600, 750, 750, 800, 800, 800, 750, 600],
    [900, 950, 950, 900, 900, 1000, 1000, 1000]
  ]
};
function sales(salesReport) {
  let resultArray = [];
  let resultObject={}
  let count=1;
  let newArray = salesReport.sales;
  for (let array of newArray) {
     //  console.log(array)
       for(let i of array){
        if(resultObject[i]){
          resultObject[i]++;
        }else{
          resultObject[i]= 1; 
        }
       
       }
       //console.log(resultObject)
  }
  
}

console.log(sales(salesReport));
