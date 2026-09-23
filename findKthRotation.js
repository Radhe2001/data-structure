function findKRotation(arr) {
  // Code Here
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[i] < arr[mid]) i = mid;
    else j = mid;
  }
  if (arr[i] > arr[i + 1]) return i + 1;
  else return 0;
}

console.log(findKRotation([5, 1, 2, 3, 4]));
