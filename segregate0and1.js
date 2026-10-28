function segregate0and1(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] === 1 && arr[j] === 0) {
      let t = arr[i];
      arr[i++] = arr[j];
      arr[j--] = t;
    }
    if (arr[i] === 0) i++;
    if (arr[j] === 1) j--;
  }
  return arr;
}

console.log(segregate0and1([1, 0, 1, 0, 1, 0, 0]));
