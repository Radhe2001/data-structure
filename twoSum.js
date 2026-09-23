function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) return true;
    map[arr[i]] = diff;
  }
  return false;
}
console.log(twoSum([1, 2, 3, 4, 5], 9));
