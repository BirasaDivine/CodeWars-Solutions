// Write a function that, given a string of text (possibly with punctuation and line-breaks),
//  returns an array of the top-3 most occurring words, in descending order of the number of occurrences.


function topThreeWords(text) {
    let newText=text.toLowerCase().split(" ")
    let result={}
    let resultArray=[]
    for(word of newText){
        if(result[word]){
            result[word]+=1
        }else{
            result[word]=1
        }
    }
    // return newText;
    resultArray= Object.entries(result).sort((a,b) => b[1]-a[1])
   // console.log(resultArray[0],resultArray[1],resultArray[2])
   console.log(resultArray)
  // console.log("New Array")
//    console.log(newResultArray)
}
console.log(topThreeWords("DDD e e e e ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))