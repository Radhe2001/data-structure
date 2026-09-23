function rearrange(arr) {
  // code here
  const pos = [],
    neg = [];
  for (let a of arr) {
    if (a < 0) neg.push(a);
    else pos.push(a);
  }
  let j = 0,
    k = 0;
  for (let i = 0; i < arr.length; ) {
    if (pos[j] !== undefined) arr[i++] = pos[j++];
    if (neg[k] !== undefined) arr[i++] = neg[k++];
  }
}

let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];

rearrange(arr);
console.log(arr);
