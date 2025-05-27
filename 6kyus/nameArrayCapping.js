//Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
//Loops through each name in the array
//For the the first letter make it uppercase
//Else make it lowercase
function capMe(names) {
    const res = [];
names.map(word => {
    console.log(word.splice(1,))
   //res.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
});


console.log(res)
}
console.log(capMe(["jo", "nelSON", "jurie"]))