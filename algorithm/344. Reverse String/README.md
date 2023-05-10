# 344. Revers String


# using in place algorithm

# suloation 

```js
var reverseString = function (s) {
    // set i as 0 and j as s.length - 1 = 4
    let i = 0;
    let j = s.length - 1;
    // loop through the string
    for(; i < j; i++, j--) {
        // add a temp variable to store the value of s[i]
        let temp = s[i];
        // replace s[i] with s[j]
        s[i] = s[j];
        // add the value of temp to s[j]
        s[j] = temp;
    }
    // return the reversed string
    return s;
};
```
## how it work

### first set i as 0 and j as s.length - 1 = 4

```js
let i = 0;
let j = s.length - 1;
```

### second loop through the string


```js
for(; i < j; i++, j--) {}
```
### third add a temp variable to store the value of s[i]

```js
let temp = s[i];
```
### fourth replace s[i] with s[j]

```js
s[i] = s[j];
```
### fifth add the value of temp to s[j]

```js
s[j] = temp;
```
### sixth return the reversed string

```js
return s;
```

