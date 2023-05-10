let nums = [1, 3, 5, 6, 5, 1, 2, 5];
let target = 4;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
twoSum(nums, target);
