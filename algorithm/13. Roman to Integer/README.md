# Roman to integer

```js
function roman(n) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    if (roman[n[i]] < roman[n[i + 1]]) {
      sum -= roman[n[i]]
    } else {
      sum += roman[n[i]]
    }
  }
  return sum
}
```

### [Leetcode](https://leetcode.com/problems/roman-to-integer/)

this javascript function, called roman, takes a roman numeral as input and returns the integer value of the roman numeral. here's how it works:

## 1. Create a roman object

the first step is to create a roman object. the roman object will hold the roman numerals and their integer values.

```js
let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
```

## 2. Create a sum variable

the next step is to create a sum variable. the sum variable will hold the integer value of the roman numeral.

```js
let sum = 0
```

## 3. Loop through the roman numeral

the next step is to loop through the roman numeral. the loop will stop when the roman numeral is empty.

```js
for (let i = 0; i < n.length; i++) {
```

## 4. Check if the roman numeral is less than the next roman numeral

the next step is to check if the roman numeral is less than the next roman numeral. if the roman numeral is less than the next roman numeral, then the sum variable will be subtracted by the roman numeral.

```js
if (roman[n[i]] < roman[n[i + 1]]) {
  sum -= roman[n[i]]
} else {
  sum += roman[n[i]]
}
```

## 5. return the sum variable

```js
return sum
```

# call it with the roman numeral as an argument

```js
console.log(roman('MCMXCIV'))
```
