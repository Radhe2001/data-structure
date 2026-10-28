function rotateArr(arr, d) {
  function rotate(arr, i, j) {
    console.log(i, j);
    let mid = Math.floor((j - i + 1) / 2);
    for (let k = 0; k < mid; k++) {
      let temp = arr[i + k];
      arr[i + k] = arr[j - k];
      arr[j - k] = temp;
    }
  }

  d = d % arr.length;
  rotate(arr, 0, d - 1);
  rotate(arr, d, arr.length - 1);
  rotate(arr, 0, arr.length - 1);
}
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
rotateArr(arr, 3);
console.log(arr);

//
