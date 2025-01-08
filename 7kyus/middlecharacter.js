function getMiddle(s) {
    let word=s.length;
    let result;
    let middleChar;
    let divisible= word/2;
     if(word % 2 == 0){
     middleChar=s.charAt(divisible)
      let secondChar=s.charAt(divisible-1)
      result= secondChar+middleChar
    }else{
        
        let oddWord=Math.floor(divisible)
         middleChar=s.charAt(oddWord)
        result= middleChar
    }
    return result;
}
console.log(getMiddle("A"))