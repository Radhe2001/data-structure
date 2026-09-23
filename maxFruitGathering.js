function maxFruits(arr, m) {
  let i = 0,
    j = m,
    max = 0,
    arrLen = arr.length;

  while (i < arr.length) {
    let temp = i,
      sum = 0;
    while (temp != j) {
      sum += arr[temp];
      temp++;
      if (temp >= arrLen) temp = 0;
    }
    if (sum > max) max = sum;
    i++;
    j++;
    if (j >= arrLen) j = 0;
  }
  return max;
}

const arr = [7, 2, 1, 3, 4];
console.log(maxFruits(arr, 2));
