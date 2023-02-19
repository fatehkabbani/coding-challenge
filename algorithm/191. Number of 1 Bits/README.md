# 191. Number of 1 Bits

## [leet code](https://leetcode.com/problems/number-of-1-bits/)

```js
var hammingWeight = function (n) {
  let sum = 0
  for (let i = 0; i < 32; i++) {
    sum += n & 1
    n = n >>> 1
  }
  return sum
}
```
this javascript function, called hammingWeight, takes a number as input and returns the number of 1 bits in the number. here's how it works:

## 1. Create a hammingWeight function

the first step is to create a hammingWeight function. the hammingWeight function will take a number as input and return the number of 1 bits in the number.

```js
function hammingWeight(n) {}
```
## 2. Create a sum variable

the next step is to create a sum variable. the sum variable will be used to keep track of the number of 1 bits in the number.

```js
let sum = 0
```
## 3. Loop through the number

the next step is to loop through the number. the number will be looped through 32 times. the number will be looped through 32 times because the number is a 32-bit number.

```js
for (let i = 0; i < 32; i++) {}
```
## 4. Add the last bit to the sum

the next step is to add the last bit to the sum. sum += n & 1 will add the last bit to the sum.

```js
sum += n & 1
```
## 5. Shift the number to the right

the next step is to shift the number to the right. n = n >>> 1 will shift the number to the right.

```js
n = n >>> 1
```
## 6. Return the sum

the last step is to return the sum. the sum is the number of 1 bits in the number.

```js
return sum
```
# to call the function, use this code:

```js
hammingWeight(00000000000000000000000000001011) // 3
```