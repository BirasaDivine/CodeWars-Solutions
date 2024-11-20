function replace(s){
    let vowels=["a","e","i","o","u","A","E","I","O","U"];
      for (let vowel of vowels ){
      s=s.replaceAll(vowel,"!")
      }
      return s;
      
    }
    console.log(replace("Hello World"));