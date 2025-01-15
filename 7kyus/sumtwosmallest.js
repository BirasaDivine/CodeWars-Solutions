function sumTwoSmallestNumbers(numbers) {  
    let smallest=numbers.sort((a,b) => a-b)
    return smallest[0] + smallest [1]
  }
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))