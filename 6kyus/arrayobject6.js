//You are given an array of objects representing employees in a company. Each object contains the following properties: name, age, and department. Your task is to write a function to calculate the sum age of each department's employees. The function should return an object containing the department name and the summation of employees' ages in each department.

//Example Input:
// const employees = [
// { name: 'Alice', age: 30, department: 'Engineering' },
// { name: 'Bob', age: 25, department: 'Marketing' },
// { name: 'Charlie', age: 35, department: 'Engineering' },
// { name: 'David', age: 40, department: 'HR' },
// { name: 'Eve', age: 28, department: 'Marketing' },
// ];

// output:
// {
// Engineering: 65,
// Marketing: 53,
// HR: 40
// } // Expected output
//Create a new empty object to save the results.
//Loop through the array using a for loop
//Get the department and if the department comes more than one time increment the age
const employees = [
    { name: 'Alice', age: 30, department: 'Engineering' },
    { name: 'Bob', age: 25, department: 'Marketing' },
    { name: 'Charlie', age: 35, department: 'Engineering' },
    { name: 'David', age: 40, department: 'HR' },
    { name: 'Eve', age: 28, department: 'Marketing' },
    ];
// function SumAverage(){
//     let result={};
//      for(let keys of employees){
//         let departments=keys.department;
//         let age=keys.age;
//         if(result[departments]){
//             result[departments]+=age;
//         }else{
//             result[departments]=age;
//         }
//      }
//     return result;
// }

// console.log(SumAverage());
function SumAverage(){
    const result=new Map()
    for(let keys of employees){
        departments=keys.department;
        age=keys.age;
        if(result.has(departments)) {
            result.set(departments,result.get(departments)+age)
        }else{
            result.set(departments,age)
        }
    }
    console.log(result)
    return Object.fromEntries(result)
}

console.log(SumAverage());