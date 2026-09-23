function isSorted(arr) {
  // code here
  let i = 0,
    isSorted = true;
  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
    i++;
  }
  return isSorted;
}

console.log(isSorted([1, 2, 3, 4, 5]));
