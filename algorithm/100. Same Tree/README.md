# 100. same tree

```js
var isSameTree = function (a, b) {
  if (!a && !b) return true
  if (!a || !b) return false
  return (
    a.val === b.val &&
    isSameTree(a.left, b.left) &&
    isSameTree(a.right, b.right)
  )
}
```

### [leetcode]](https://leetcode.com/problems/same-tree/)

this javascript function, called isSameTree, takes two binary trees as input and returns true if the two trees are the same and false if the two trees are not the same. here's how it works:

## 1. Create a isSameTree function

the first step is to create a isSameTree function. the isSameTree function will take two binary trees as input and return true if the two trees are the same and false if the two trees are not the same.

```js
function isSameTree(a, b) {}
```

## 2. Check if the two trees are the same

the next step is to check if the two trees are the same. if the two trees are the same, return true. if the two trees are not the same, return false.

```js
if (!a && !b) return true
if (!a || !b) return false
```

## 3. return true if the two trees are the same

the next step is to return true if the two trees are the same. the two trees are the same if the two trees have the same value and the two trees have the same left and right subtrees.

```js
return (
  a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
)
```
