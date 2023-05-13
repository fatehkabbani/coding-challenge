#  Group Anagrams

```js
var groupAnagrams = (strs) => {
    let obj = {};
    for(let i of strs){
        let key = i.split('').sort().join('');
        !obj[key] ? obj[key] = [i] : obj[key].push(i);
    }
    return Object.values(obj);
}
```

#  how it works

## 1. Create an empty object
```js
let obj = {};
```
## 2. Loop through the array
```js
for(let i of strs){}
```
## 3. Create a key variable and sort the string alphabetically 
```js
let key = i.split('').sort().join('');
```
## 4. Check if the key exists in the object if it's not create a new key and assign the value to an array with the current string. If the key exists push the current string to the array.
```js
!obj[key] ? obj[key] = [i] : obj[key].push(i);
```
## 5. Return the values of the object
```js
return Object.values(obj);
```