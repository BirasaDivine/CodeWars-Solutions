// function* greetUser() {
//   const greetings = yield;
//   return `Hello ${greetings}`;
// }
// const iterator = greetUser;
// iterator.next();
// iterator.next().value;
// iterator.next("Hello Udacity Student!");

function* getEmployee() {
  const names = [
    "Amanda",
    "Diego",
    "Farrin",
    "James",
    "Kagure",
    "Kavita",
    "Orit",
    "Richard"
  ];
  const facts = [];
  for (let name of names) {
    console.log(facts);
    facts.push(yield name);
  }
  return facts;
}
const iterator = getEmployee();
let name = iterator.next().value;
let name2 = iterator.next(`${name} is cool`).value;
let name3 = iterator.next(`${name2} is cool`).value;
console.log(name2);
