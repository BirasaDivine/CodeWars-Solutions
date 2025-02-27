function fibonacciGenerator(limit) {
  let result = [0, 1];
  for (let i = 1; i < limit; i++) {
    const currentNumber = result[i];
    const previousNumber = result[i - 1];

    result.push(currentNumber + previousNumber);
  }

  return result;
}

console.log(fibonacciGenerator(21));
