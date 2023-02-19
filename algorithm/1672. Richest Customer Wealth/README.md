# 1672. Richest Customer Wealth

## [1672. Richest Customer Wealth](https://leetcode.com/problems/richest-customer-wealth/)

```js
const maximumWealth = function (accounts) {
  let resault = 0
  accounts.forEach((item) => {
    let res = item.reduce((acc, prev) => {
      return acc + prev
    }, 0)
    resault = Math.max(resault, res)
  })
  return resault
}
```
## here's how it works:

### 1. Create a maximumWealth function

The first step is to create a maximumWealth function. The maximumWealth function will take an array of accounts as input and return the maximum wealth.

```js
function maximumWealth(accounts) {}
```

### 2. Create a resault variable

The next step is to create a resault variable. The resault variable will be used to keep track of the maximum wealth.

```js
let resault = 0
```

### 3. Loop through the accounts

The next step is to loop through the accounts. The accounts will be looped through and the sum of the accounts will be stored in the resault variable.

```js
accounts.forEach((item) => {
  let res = item.reduce((acc, prev) => {
    return acc + prev
  }, 0)
  resault = Math.max(resault, res)
})
```

### 4. Return the resault

The next step is to return the resault.

```js
return resault
```

### 5. Call the function

The last step is to call the function.

```js
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]])) // 6
```
