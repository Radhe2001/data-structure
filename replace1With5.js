function replace(n) {
  let replaceNum = 0;
  let num = n.toString();
  console.log(typeof num);
  for (let i = 0; i < num.length; i++) {
    let digit = parseInt(num[i]);
    replaceNum = replaceNum * 10 + (digit === 0 ? 5 : digit);
  }
  return replaceNum;
}

console.log(replace(1004));
