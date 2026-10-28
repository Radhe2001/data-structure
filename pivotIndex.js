var pivotIndex = function (nums) {
  let sum = nums.reduce((s, a) => s + a, 0),
    tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tempSum === sum - nums[i] - tempSum) {
      return i;
    } else {
      tempSum += nums[i];
    }
  }
  return -1;
};

console.log(pivotIndex([1, 2, 3]));
