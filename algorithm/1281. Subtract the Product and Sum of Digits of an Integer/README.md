# 1281. Subtract the product and sum of digits of an integer

[LeetCode](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

this is a javascript function, called subtractProductionAndSum, that takes a number as input and returns the difference between the product of its digits and the sum of its digits.

```js
var subtractProductAndSum = function (n) {
  let total = 1
  let plusTotal = 0
  let number = Array.from(String(n), Number)
  for (let i = 0; i < number.length; i++) {
    total *= number[i]
    plusTotal += number[i]
  }
  return total - plusTotal
}
```

Here's how it works:

## 1. Create a subtractProductAndSum function

The first step is to create a subtractProductAndSum function. The subtractProductAndSum function will take a number as input and return the difference between the product of its digits and the sum of its digits.

```js
function subtractProductAndSum(n) {}
```

## 2. Create a total variable

The next step is to create a total variable. The total variable will be used to keep track of the product of the digits.

```js
let total = 1
```

## 3. Create a plusTotal variable

The next step is to create a plusTotal variable. The plusTotal variable will be used to keep track of the sum of the digits.

```js
let plusTotal = 0
```

## 4. Create a number variable

The next step is to create a number variable. The number variable will be used to store the number as an array.

```js
let number = Array.from(String(n), Number)
```

## 5. Loop through the number

The next step is to loop through the number. The number will be looped through and the product of the digits will be stored in the total variable.

```js
for (let i = 0; i < number.length; i++) {
  total *= number[i]
  plusTotal += number[i]
}
```

## 6. Return the difference between the product and sum

The last step is to return the difference between the product and sum. The difference between the product and sum is the answer.

```js
return total - plusTotal
```

# To call the function, use this code:

```js
Console.log(subtractProductAndSum(234)) // 15
```


