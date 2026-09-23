function firstSearch(arr, k) {
  // Code Here
  let first = 0,
    last = arr.length - 1,
    index = -1;
  while (first !== last) {
    let mid = parseInt((first + last) / 2);

    if (arr[mid] === k) {
      index = mid;
      break;
    }

    if (arr[mid] > k) last = mid - 1;
    if (arr[mid] < k) first = mid + 1;
  }
  if (arr[first] === k) return first;
  console.log(index);
  if (index !== -1) {
    while (first !== index) {
      let mid = parseInt((first + index) / 2);
      if (arr[first] === k) return first;
      if (arr[mid] === k) index = mid;
      if (arr[mid] < k) first = mid + 1;
    }
  }
  return index;
}

console.log(firstSearch([1, 1, 1, 1, 2], 1));
