function countFreq(arr, target) {
  // code here
  let i = 0,
    j = arr.length - 1,
    found = false;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[i] === target) {
      found = true;
      break;
    }
    if (arr[mid] < target) i = mid + 1;
    if (arr[mid] >= target) j = mid;
  }
  found = arr[i] === target;
  if (found) {
    let count = 0;
    while (arr[i++] === target) {
      count++;
    }
    return count;
  }
  return 0;
}

console.log(countFreq([1, 1, 2, 2, 2, 3], 2));
