function* fibonacciGenerator(limit) {
  let a = 0;
  let b = 1;
  while (a <= limit) {
    yield (a[(a, b)] = [b, a + b]);
  }
}
const fib = fibonacciGenerator(50);
for (let num of fib) {
  console.log(num);
}
