function allDivisor(n) {
  let i = 1,
    arr = [];
  while (i * i <= n) {
    if (n % i === 0) arr.push(i);
    i++;
  }
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] * arr[i] !== n) arr.push(n / arr[i]);
  }
  return arr;
}
console.log(allDivisor(51));
