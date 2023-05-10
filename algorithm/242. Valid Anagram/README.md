# 242. Valid Anagram

# sulotion

```js
    var isAnagram = function(s, t) {
    // store the string in an array and sort it

    // first array
    let firstStrArray = [...t].sort();
    
    // second array
    let secondStrArray = [...s].sort()
    
    // if the sorted array is equal to the sorted string then return true
    if(firstStrArray.join("")== secondStrArray.join("")) return true
    // if not return false
    return false
};
```

# how it work

## first store the string in an array and sort it

```js
    // first array
    let firstStrArray = [...t].sort();
    
    // second array
    let secondStrArray = [...s].sort()
```
## second if the sorted array is equal to the sorted string then return true

```js
    if(firstStrArray.join("")== secondStrArray.join("")) return true
```

## else return false

```js
    return false
```