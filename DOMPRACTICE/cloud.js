const text=document.querySelector("#myParagraph").textContent;
//console.log(text);
const newText=text.replaceAll(".","").replaceAll(",","").replaceAll(";","").replaceAll(":","");
//console.log(newText);
const secondText=newText.split(" ");
//console.log(secondText);
const thirdText=secondText.filter(x=>x.length >= 1)
const forthText=thirdText.map((y)=>y.includes('') ? y.slice(y.length-2));
console.log(forthText);
 let textObject={};
 for(let i=0;i<thirdText.length;i++){
     let counter = 0;
    for(let y=0;y<thirdText.length;y++){
        if(thirdText[y] == thirdText[i]){
            counter++
        }
    }
    textObject[thirdText[i]] = counter;

console.log(textObject)