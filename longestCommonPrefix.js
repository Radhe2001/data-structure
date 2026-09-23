function longestCommonPrefix(arr) {
  // code here
  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < small.length) small = arr[i];
  }
  let temp = small;
  for (let i = 0; i < small.length; i++) {
    let j;
    for (j = 0; j < arr.length; j++) {
      if (arr[j].slice(0, temp.length) !== temp) break;
    }

    if (j === arr.length) return temp;
    temp = temp.slice(0, temp.length - 1);
  }
  return "";
}

console.log(longestCommonPrefix(["hello", "world"]));
