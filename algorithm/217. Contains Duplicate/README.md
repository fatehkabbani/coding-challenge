# 217. Contains Duplicate

![leetcode.com](https://leetcode.com/problems/contains-duplicate/)

###  my first sulation  i got it right but it's not the best one (it's o(n2) time complexity) 7000ms runtime [=

```js
var containsDuplicate = function (nums) {
  // loop over the array
  for (let i = 0; i < nums.length; i++) {
    // make another loop to check if there is a duplicate
    for (let j = 0; j < nums.length; j++) {
      // if there is a duplicate and the index of the duplicate is not equal to the index of the number then return true
      if (nums[i] == nums[j] && j != i) return true;      
    }
  }
  // if there is no dupcialte return false
  return false;
};
```
# how it work 
## 1. Create a containsDuplicate function (leetcode function)
```js
var containsDuplicate = function (nums) {}
```
## 2. Loop over the array
```js
for (let i = 0; i < nums.length; i++) {}
```
## 3. Make another loop to check if there is a duplicate
```js
for (let j = 0; j < nums.length; j++) {}
```
## 4. If there is a duplicate and the index of the duplicate is not equal to the index of the number then return true
```js
if (nums[i] == nums[j] && j != i) return true;
```
## 5. If there is no dupcialte return false
```js
return false;
```
# second sulotion with o(n) instade of o(n2) 
```js
var containsDuplicate = function (nums) {
  // create a set
  const n = new Set();
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // if the set has the number then return true
      if (n.has(nums[i])) {
          return true;
      }
      // add the number to the set
      n.add(nums[i]);
  }
  // if there is no dupcialte return false
  return false;
};
```
# how it work
## 1. Create a containsDuplicate function (leetcode function)
```js
var containsDuplicate = function (nums) {}
```
## 2. Create a set
```js
const n = new Set();
```
## 3. Loop through the array
```js
for (let i = 0; i < nums.length; i++) {}
```
## 4. If the set has the number then return true
```js
if (n.has(nums[i])) {
    return true;
}
```
## 5. Add the number to the set
```js
n.add(nums[i]);
```
## 6. If there is no dupcialte return false
```js
return false;
```
# third sulotion (the best one)
```js
var containsDuplicate = function (nums){
    let n = new Set(nums);
    if (n.size == nums.length) return false;
    return true;
}
```
# how it work
## 1. Create a containsDuplicate function (leetcode function)
```js
var containsDuplicate = function (nums) {}
```
## 2. Create a set
```js
const n = new Set(nums);
```
## 3. If the set size is equal to the array length then return false
```js
if (n.size == nums.length) return false;
```
## 4. If there is no dupcialte return false
```js
return true;
```
