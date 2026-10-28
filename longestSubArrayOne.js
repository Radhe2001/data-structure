var longestSubarray = function (nums) {
  let p1 = 0,
    p2 = 0,
    zeroCount = 0,
    count = 0,
    max = 0;
  while (p2 < nums.length) {
    if (zeroCount <= 1) {
      if (nums[p2++] === 0) zeroCount++;
      else count++;
    } else {
      if (nums[p1++] === 0) zeroCount--;
      else count--;
    }
    max = max > count ? max : count;
  }
  return max === nums.length ? max - 1 : max;
};

console.log(longestSubarray([1, 1, 1]));
