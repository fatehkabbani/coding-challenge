# Single Number

```js
var singleNumber = (nums) => nums.reduce((a, b) => a ^ b)
```

## [leetcode](https://leetcode.com/problems/single-number)

this javascript function, called singleNumber, takes an array of numbers as input and returns the number that appears only once in the array. here's how it works:

## 1. Create a singleNumber function

the first step is to create a singleNumber function. the singleNumber function will take an array of numbers as input and return the number that appears only once in the array.

```js
function singleNumber(nums) {}
```

## 2. Use reduce to find the number that appears only once

the next step is to use reduce to find the number that appears only once. the number that appears only once is the number that is the result of the reduce function.

```js
nums.reduce((a, b) => a ^ b)
```

## 3. return the number that appears only once

the next step is to return the number that appears only once. the number that appears only once is the number that is the result of the reduce function.

```js
return nums.reduce((a, b) => a ^ b)
```

## full code

```js
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b)
}
```

or

```js
var singleNumber = (nums) => nums.reduce((a, b) => a ^ b)
```

## call the function

```js
singleNumber([2, 2, 1, 2, 3, 2]) // 1
```
