let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
let sortingA=a+b;
sortingA = [...new Set(sortingA.split("").sort())].join("");
console.log(sortingA);