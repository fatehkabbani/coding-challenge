# 4. Median of Two Sorted Arrays

```js
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2
  } else {
    return arr[mid]
  }
}
```

### [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

This is a JavaScript function that finds the median of two sorted arrays. The function takes in two arrays, nums1 and nums2, and returns the median of the combined array.This is a JavaScript function that finds the median of two sorted arrays. The function takes in two arrays, **nums1** and **nums2** , and returns the median of the combined array.

# how it works:

## 1. Create a new array

first, we create a new array by combining the two input arrays. We do this by using the `concat` method.

```js
let arr = nums1.concat(nums2)
```

## 2. Sort the new array in ascending order

second, we sort the new array in ascending order. We do this by using the `sort` method.

```js
arr.sort((a, b) => a - b)
```

## 3. Find the middle index of the new array

third, we find the middle index of the new array. We do this by using the `Math.floor` method to round down the length of the array divided by 2.

```js
let mid = Math.floor(arr.length / 2)
```

## 4. Check if the length of the new array is even

fourth, we check if the length of the new array is even. We do this by using the modulus operator to check if the length of the array divided by 2 has a remainder of 0.

```js
if (arr.length % 2 === 0)
```

## 5. If the length of the new array is even, return the average of the two middle numbers

fifth, if the length of the new array is even, we return the average of the two middle numbers. We do this by adding the middle number and the number before the middle number and dividing the sum by 2.

```js
return (arr[mid] + arr[mid - 1]) / 2
```

else, if the length of the new array is odd, we return the middle number. We do this by returning the middle number.

```js
return arr[mid]
```

how to call the function:

```js
findMedianSortedArrays([1, 3], [2]) //Output: 2
```
