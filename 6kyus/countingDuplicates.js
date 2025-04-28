//"abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

function duplicateCount(text){
    debugger;
    let count={};
    for(letter of text.toLowerCase()){
     
        if(count[letter]){
          
            count[letter]++;
        }else{
            count[letter]=1; 
        }
    }

    return Object.entries(count)
        .filter(num => num[1] > 1)
        .length;
  }

    console.log(duplicateCount("aabBcde"))