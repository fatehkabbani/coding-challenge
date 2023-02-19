# 2011. Final Value of Variable After Performing Operations

[LeetCode](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)

in this README.md file i will add the problem description and the solution to the problem.

## Problem Description

You are given an array of strings `operations` where `operations[i]` is the `ith` operation you must apply to the variable `x`:

#

this is a javascript function, called finalValueAfterOperations, that takes an array of strings as input and returns the final value of the variable after performing all the operations.

```js
var finalValueAfterOperations = function (operations) {
  let X = 0
  let sym
  for (let i = 0; i < operations.length; i++) {
    operations[i] == '++X' || operations[i] == 'X++' ? X++ : X--
  }
  return X
}
```

Here's how it works:

## 1. Create a finalValueAfterOperations function

The first step is to create a finalValueAfterOperations function. The finalValueAfterOperations function will take an array of strings as input and return the final value of the variable after performing all the operations.

```js
function finalValueAfterOperations(operations) {}
```

## 2. Create a X variable

The next step is to create a X variable. The X variable will be used to keep track of the final value of the variable.

```js
let X = 0
```

## 3. Loop through the operations

The next step is to loop through the operations. The operations will be looped through and the final value of the variable will be stored in the X variable.

```js
for (let i = 0; i < operations.length; i++) {
  operations[i] == '++X' || operations[i] == 'X++' ? X++ : X--
}
```

## 4. Return the final value of the variable

The next step is to return the final value of the variable.

```js
return X
```

## 5. Run the code

The final step is to run the code.

```js
finalValueAfterOperations(['--X', 'X++', 'X++'])
```
