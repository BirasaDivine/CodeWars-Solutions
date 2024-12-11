// The CEO of Spoon Central wanted to know the types of spoons of each variety we actually have. They just came up with the idea of Spoon Central and made note of the spoons they have available on a napkin.

// Write a function that takes an array of spoon names and returns an object showing how many times each spoon appears on the napkin.

// Example:
// ```javascript
// const spoonInventory = [
//   "Wooden Spoon",
//   "Silver Spoon",
//   "Wooden Spoon",
//   "Soup Spoon",
//   "Silver Spoon"
// ];

// // Should return:
// {
//   "Wooden Spoon": 2,
//   "Silver Spoon": 2,
//   "Soup Spoon": 1
// }

const spoonInventory = [
    "Tiny Spoon",
    "Spoon of Destiny",
    "Rusty Spoon",
    "Mega Spoon 5000",
    "Mega Spoon 5000",
    "Plastic Spoon",
    "Wooden Spoon",
    "Rusty Spoon",
    "Mega Spoon 5000",
    "Ultra Spoon Pro Max 11",
    "Tiny Spoon",
    "Rusty Spoon",
    "Mega Spoon 5000",
    "Mega Spoon 5000",
    "Plastic Spoon",
    "Ultra Spoon Pro Max 11",];
let spoonobj={};
for (i=0;i<spoonInventory.length;i++){
    let counter=0;
    for(y=0;y<spoonInventory.length;y++){
        if(spoonInventory[i] == spoonInventory[y]){
            counter++;
        }
    }
    spoonobj[spoonInventory[i]]= counter;
}
console.log(spoonobj)