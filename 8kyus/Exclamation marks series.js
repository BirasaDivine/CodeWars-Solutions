function replace(s){
    let vowels=["a","e","i","o","u","A","E","I","O","U"];
    let newSentence="";
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            newSentence=newSentence +"!";
  }else{
      newSentence=newSentence+s[i];
  }
    }
  return newSentence;

  
}
console.log(replace('HI'));