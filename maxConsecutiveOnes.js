var longestOnes = function (nums, k) {
  let i = 0,
    j = 0,
    max = 0;
  while (j < nums.length) {
    if (nums[j] === 1 || k > 0) {
      if (nums[j++] === 0) k--;
    } else {
      if (nums[i++] === 0) k++;
    }
    let diff = j - i;
    max = diff > max ? diff : max;
  }
  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
//
