function frequencyCount(arr) {
  // code here
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] ?? 0) + 1;
  }
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(obj[i + 1] ?? 0);
  }
  return array;
}

console.log(frequencyCount([2, 3, 3, 2, 5]));
