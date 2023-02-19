# 103. Binary Tree Zigzag Level Order Traversal

```js
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const rootHold = [root]
  const resault = []
  let n = 0
  while (rootHold.length) {
    let length = rootHold.length
    if (n % 2 === 0) {
      resault.push(rootHold.map((node) => node.val))
    } else {
      resault.push(rootHold.map((node) => node.val).reverse())
    }
    n++
    while (length--) {
      let node = rootHold.shift()
      if (node.left) {
        rootHold.push(node.left)
      }
      if (node.right) {
        rootHold.push(node.right)
      }
    }
  }
  return resault
}
```

### [LeetCode](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

this javascript function, called zigzagLevelOrder, takes a binary tree as input and returns the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
Here's how it works:

## 1. Check if the root is null
the first step is to check if the root is null. if the root is null, then the function will return an empty array.
```js
if (!root) return []
```
## 2. Create a rootHold array
the next step is to create a rootHold array. the rootHold array will hold the nodes of the binary tree.
```js
const rootHold = [root]
```
## 3. Create a resault array
the next step is to create a resault array. the resault array will hold the zigzag level order traversal of the nodes' values.
```js
const resault = []
```
## 4. Create a n variable
the next step is to create a n variable. the n variable will hold the number of the level.
```js
let n = 0
```
## 5. Loop through the rootHold array
the next step is to loop through the rootHold array. the loop will stop when the rootHold array is empty.
```js
while (rootHold.length) {
```
## 6. Create a length variable
the next step is to create a length variable. the length variable will hold the length of the rootHold array.
```js
let length = rootHold.length
```
## 7. Check if n is even
the next step is to check if n is even. if n is even, then the function will push the values of the nodes in the rootHold array to the resault array.
```js
if (n % 2 === 0) {
  resault.push(rootHold.map((node) => node.val))
} else {
```
## 8. Check if n is odd
if n is odd, then the function will push the values of the nodes in the rootHold array to the resault array in reverse order.
```js
  resault.push(rootHold.map((node) => node.val).reverse())
}
```
## 9. Increment n
the next step is to increment n.
```js
n++
```
## 10. Loop through the rootHold array
the next step is to loop through the rootHold array. the loop will stop when the length variable is equal to 0.
```js
while (length--) {
```
## 11. Create a node variable
the next step is to create a node variable. the node variable will hold the first node in the rootHold array.
```js
let node = rootHold.shift()
```
## 12. Check if the node has a left node
the next step is to check if the node has a left node. if the node has a left node, then the function will push the left node to the rootHold array.
```js
if (node.left) {
  rootHold.push(node.left)
}
```
## 13. Check if the node has a right node
the next step is to check if the node has a right node. if the node has a right node, then the function will push the right node to the rootHold array.
```js
if (node.right) {
  rootHold.push(node.right)
}
```
## 14. Return the resault array
the next step is to return the resault array.
```js
return resault
```
