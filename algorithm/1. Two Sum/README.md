# 1. Two Sum

# Solution

```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```
# how it work

## first loop loop through the array

```js
    for (let i = 0; i < nums.length; i++) {}
```
## second loop loop where j is equal to i + 1 and loop through the array

```js
    for (let j = i + 1; j < nums.length; j++) {}
```
## if the sum of the two numbers is equal to the target return the index of the two numbers

```js
    if (nums[i] + nums[j] === target) {
        return [i, j];
      }
```
## else return false

```js
    return false
```
