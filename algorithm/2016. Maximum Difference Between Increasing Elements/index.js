var maximumDifference = function (nums) {
    let max = -1, diff;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            diff = nums[j] - nums[i]
            if (diff > max && diff > 0) max = nums[j] - nums[i];
        }
    }
    return max;
};