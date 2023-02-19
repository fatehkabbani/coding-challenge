# Function to Find the Largest Perimeter of a Triangle

### [976. Largest Perimeter Triangle](https://leetcode.com/problems/largest-perimeter-triangle/)

This JavaScript function, called largestPerimeter, takes an array of numbers as input and returns the largest perimeter of a triangle that can be formed using three numbers from the input array. Here's how it works:

## 1. Sort the array in descending order

The first step is to sort the array in descending order. This is because the largest perimeter of a triangle is formed by the three largest numbers in the array. Sorting the array in descending order ensures that the three largest numbers are at the beginning of the array.

```js
nums.sort((a, b) => a - b)
```

## 2. Loop through the array

The next step is to loop through the array. The loop will stop when the index of the current number is greater than or equal to the length of the array minus 2. This is because the largest perimeter of a triangle is formed by the three largest numbers in the array. Therefore, the loop will stop when the index of the current number is greater than or equal to the length of the array minus 2. This ensures that the loop will stop before the last two numbers in the array.

```js
for (let i = 0; i < nums.length - 2; i++) {
```

## 3. Check if the current number is less than the sum of the next two numbers

The next step is to check if the current number is less than the sum of the next two numbers. If the current number is less than the sum of the next two numbers, then the current number, the next number, and the number after the next number form a triangle. Therefore, the largest perimeter of a triangle is formed by the current number, the next number, and the number after the next number. The function will return the sum of the current number, the next number, and the number after the next number.

```js
if (nums[i] < nums[i + 1] + nums[i + 2]) {
  return nums[i] + nums[i + 1] + nums[i + 2]
}
```

## 4. Return 0

If the current number is not less than the sum of the next two numbers, then the current number, the next number, and the number after the next number do not form a triangle. Therefore, the largest perimeter of a triangle is not formed by the current number, the next number, and the number after the next number. The function will return 0.

```js
return 0
```
