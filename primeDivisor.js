// function primeDivisor(n) {
//   const primeDivisors = [];
//   let i = 2;
//   while (i * i <= n) {
//     while (n % i == 0) {
//       primeDivisors.push(i);
//       n /= i;
//     }
//     i = i % 2 != 0 ? i + 2 : i % 3 == 0 ? i + 4 : i + 1;
//   }
//   if (n > 1) primeDivisors.push(n);
//   return primeDivisors;
// }

function primeDivisor(n) {
  function checkRepetition(arr, t, j) {
    while (t % j === 0) {
      arr.push(j);
      t /= j;
    }
    return t;
  }
  const primeDivisors = [];
  if (n % 2 == 0) n = checkRepetition(primeDivisors, n, 2);
  if (n % 3 == 0) n = checkRepetition(primeDivisors, n, 3);
  let i = 5;
  while (i * i <= n) {
    n = checkRepetition(primeDivisors, n, i);
    n = checkRepetition(primeDivisors, n, i + 2);
    i += 6;
  }
  if (n > 1) primeDivisors.push(n);
  return primeDivisors;
}

console.log(primeDivisor(51));
