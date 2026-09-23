function pushZerosToEnd(arr) {
  // code here
  function swap(arr, p1, p2) {
    let c = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = c;
  }
  let p1 = 0,
    p2 = 0;
  while (p1 < arr.length && p2 < arr.length) {
    if (arr[p1] !== 0 && arr[p2] !== 0) {
      p1++;
      p2++;
    } else {
      if (arr[p2] === 0) {
        while (arr[p1] === 0 && p1 < arr.length - 1) p1++;
        console.log(p1, p2);
        swap(arr, p1, p2);
        p2++;
        while (arr[p1] === 0 && p1 < arr.length) p1++;
      }
    }
  }
}

let arr = [3, 5, 0, 0, 4];

pushZerosToEnd(arr);

console.log(arr);
