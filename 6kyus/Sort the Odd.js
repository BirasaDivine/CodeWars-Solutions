function sortArray(array) {
  const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  return array.map(num => {
    if (num % 2 !== 0) {
      return oddNumbers; 
    } else {
      return num; 
    }
  });
}

console.log(sortArray(9, 8, 7, 6, 5, 4, 3, 2, 1, 0)); 