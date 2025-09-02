function generatePairs(n) {
  let results = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (0 <= i && i <= j && j <= n) {
        results.push([i, j]);
      }
    }
  }
  return results;
}
console.log(generatePairs(2));
