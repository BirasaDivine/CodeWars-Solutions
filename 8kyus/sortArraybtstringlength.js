function sortByLength (array) {
    const counting=array.sort(function(a,b){
        return a.length - b.length;
    });
    return counting;
 }
  console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));