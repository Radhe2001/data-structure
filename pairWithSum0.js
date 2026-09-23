function getPairs(arr) {
  // code here
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = 0 - arr[i];
    if (obj[diff] !== undefined && !obj[diff]) {
      obj[diff] = true;
      obj[arr[i]] = true;
    }
    obj[arr[i]] = obj[arr[i]] ?? false;
  }
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    const diff = 0 - arr[i];
    let first = arr[i] > diff ? diff : arr[i],
      last = arr[i] > diff ? arr[i] : diff;
    if (obj[arr[i]] === true) {
      temp.push([first, last]);
      delete obj[first];
      delete obj[last];
    }
  }
  temp.sort((a, b) => a[0] - b[0]);
  return temp;
}
console.log(getPairs([1, 2, 3, -2, -1, 4, -4]));
