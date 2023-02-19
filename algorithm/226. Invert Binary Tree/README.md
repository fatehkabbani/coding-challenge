# 226. Invert Binary Tree

```js
var invertTree = function (root) {
  if (root === null) return null
  let nodeTemp = root.left
  root.left = root.right
  root.right = nodeTemp
  invertTree(root.left)
  invertTree(root.right)
  return root
}
```
[leet code](https://leetcode.com/problems/invert-binary-tree/)

this javascript function, called invertTree, takes a binary tree as input and returns the inverted binary tree. here's how it works:

# 1. Create an invertTree function

the first step is to create an invertTree function. the invertTree function will take a binary tree as input and return the inverted binary tree.

```js
function invertTree(root) {}
```

# 2. Check if the root is null

the next step is to check if the root is null. if the root is null, then return null.

```js
if (root === null) return null
```

# 3. Create a nodeTemp variable

the next step is to create a nodeTemp variable. the nodeTemp variable will be used to temporarily store the left node of the root.

```js
let nodeTemp = root.left
```

# 4. Swap the left and right nodes

the next step is to swap the left and right nodes. root.left = root.right will swap the left and right nodes.

```js
root.left = root.right
```

# 5. Set the right node to the nodeTemp

the next step is to set the right node to the nodeTemp. root.right = nodeTemp will set the right node to the nodeTemp.

```js
root.right = nodeTemp
```

# 6. Call invertTree on the left node

the next step is to call invertTree on the left node. invertTree(root.left) will call invertTree on the left node.

```js
invertTree(root.left)
```

# 7. Call invertTree on the right node

the next step is to call invertTree on the right node. invertTree(root.right) will call invertTree on the right node.

```js
invertTree(root.right)
```

# 8. Return the root

the last step is to return the root. the root is the inverted binary tree.

```js
return root
```
# call the function, use this code:

```js
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]))
```