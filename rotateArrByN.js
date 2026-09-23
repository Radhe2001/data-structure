function rotate(arr, k) {
  let i = 0,
    j = k;
  while (i < arr.length) {
    let c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
    i++;
    j++;
    if (j >= arr.length) j = 0;
  }
  return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 1));
