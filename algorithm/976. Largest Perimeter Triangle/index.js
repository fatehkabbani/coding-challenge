// i didn't know how to do it i watched some youtube videos and i found this solution and i understood it and i wrote it by myself and i tried to explain it in explain.md file (i'm not good in math)

var largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--) {
        if (nums[i - 2] + nums[i - 1] > nums[i]) {
            return nums[i - 2] + nums[i - 1] + nums[i];
        }
    }
    return 0
};