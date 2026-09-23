const allPrimeNumbers = (n) => {
  const arr = [];
  const isPrime = (t) => {
    if (t === 2 || t === 3) return true;
    if (t % 2 == 0 || t % 3 === 0) return false;
    let i = 5;

    while (i * i <= t) {
      if (t % i === 0 || t % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
};

console.log(allPrimeNumbers(35));
