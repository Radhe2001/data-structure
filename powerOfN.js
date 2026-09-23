// const power = (x, y) => {
//   if (y === 0) return 1;
//   return x * power(x, y - 1);
// };

// const findPower = (x, y) => {
//   if (y % 2 === 0) {
//     const pow = power(x, y / 2);
//     return pow * pow;
//   } else return x * findPower(x, y - 1);
// };

const power = (x, y) => {
  let pow = 1;
  while (y-- !== 0) pow *= x;
  return pow;
};

const findPower = (x, y) => {
  const isEven = y % 2 === 0;
  if (!isEven) y--;
  const pow = power(x, y / 2);
  const mul = pow * pow;
  return (isEven ? 1 : x) * mul;
};

console.log(findPower(2, 5));
