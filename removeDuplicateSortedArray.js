function removeDuplicates(arr) {
  // code here
  let temp = [],
    i = 0;
  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) temp.push(arr[i]);
    i++;
  }
  return temp;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));
