# 2016. Maximum Difference Between Increasing Elements

[LeetCode](https://leetcode.com/problems/maximum-difference-between-increasing-elements/)

## for this one i didn't fully understand what should i do so i looked at the solution and i understood it it was eazy but the explanation was not clear any way i will try to explain it

# code

```js
var maximumDifference = function (nums) {
  let max = -1,
    diff
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      diff = nums[j] - nums[i]
      if (diff > max && diff > 0) max = nums[j] - nums[i]
    }
  }
  return max
}
```

# explanation

## first we need to create a variable to store the maximum difference and a variable to store the difference between the two numbers

## then we need to loop through the array and for each number we need to loop through the rest of the array and check if the difference between the two numbers is greater than the maximum difference and if it is greater than zero

## if it is greater than the maximum difference we need to update the maximum difference with the difference between the two numbers

## if the maximum difference is still -1 it means that there is no difference between the two numbers so we need to return -1

# explain the code

## first we need to create a variable to store the maximum difference and a variable to store the difference between the two numbers

```js
let max = -1,
  diff
```

## then we need to loop through the array and for each number we need to loop through the rest of the array and check if the difference between the two numbers is greater than the maximum difference and if it is greater than zero

```js
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    diff = nums[j] - nums[i] // check the difference between the two numbers
    if (diff > max && diff > 0) max = nums[j] - nums[i] // check if the difference is greater than the maximum difference and if it is greater than zero
  }
}
```

## if it is greater than the maximum difference we need to update the maximum difference with the difference between the two numbers

```js
if (diff > max && diff > 0) max = nums[j] - nums[i]
```

## if the maximum difference is still -1 it means that there is no difference between the two numbers so we need to return -1

```js
return max
```

# call the function

```js
console.log(maximumDifference([7, 1, 5, 4]))
```
