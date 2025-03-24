// You are given an array of objects representing employees in a company. Each object contains the following properties: name, age, and department. Your task is to write a function to calculate the average sum of each department's employees. The function should return an object containing the department name and the summation of employees' age in each department.
// //Example Input:
const employees = [
  { name: "Alice", age: 30, department: "Engineering" },
  { name: "Bob", age: 25, department: "Marketing" },
  { name: "Charlie", age: 35, department: "Engineering" },
  { name: "David", age: 40, department: "HR" },
  { name: "Eve", age: 28, department: "Marketing" }
];

// output:
// {
// Engineering: 65,
// Marketing: 53,
// HR: 40
// }
function averageSum(employees) {
  const result = {};
  for (let i of employees) {
    if (result[i.department]) {
      result[i.department] += i.age;
    } else {
      result[i.department] = i.age;
    }
  }
  return result;
}
console.log(employeeDetails(employees));
/*
create: new Map()
get: map.get(keyName)
set: map.set(keyName, value)
*/
// function sumAverage(employees){
//     let result={};
//     for(let employee of employees){
//         const department=employee.department;
//         const age=employee.age;
//         if(result[department]){
//             result[department]+=age;
//         }else{
//         result[department]=age;
//         }
//     }
//     return result
// }
//     console.log(sumAverage(employees))
// let sumAverage=new Map(employees);
//   Map.get(department)
// console.log(sumAverage)
function sumAverage(employees) {
  let result = new Map();
  for (let employee of employees) {
    let department = employee.department;
    let age = employee.age;
    if (result.has(department)) {
      result.set(department, result.get(department) + age);
    } else {
      result.set(department, age);
    }
  }

  //   // converting map to object
  //   const resultObject = {};
  //   for (const key of result.keys()) {
  //       resultObject[key] = result.get(key);
  //   }

  //   return resultObject;

  return Object.fromEntries(result);
}
console.log(sumAverage(employees));
