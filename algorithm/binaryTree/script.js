class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
// for tree sum you need the node to be number so yeah 
const number_a = new Node(1);
const number_b = new Node(3);
const number_c = new Node(4);
const number_d = new Node(5);
const number_e = new Node(6);
const number_f = new Node(7);

number_a.left = number_b;
number_a.right = number_c;
number_b.left = number_d;
number_b.right = number_e;
number_c.right = number_f;

/* 
                                                                   a
                                                                 /  \
                                                                b    c
                                                              /  \    \
                                                            d     e    f

*/
/*
                                                                 2
                                                                / \
                                                               3   4
                                                             / \    \                                                        
                                                            5   6    7
*/

// depth first value
const depthFirstWal = (root) => {
  if (root === null) return []
  let res = []
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop()
    res.push(current.val)

    if (current.right) { stack.push(current.right) }
    if (current.left) { stack.push(current.left) }
  }
  return res
};
const depthFirstWal1 = (root) => {
  if (root === null) return [];
  let leftSide = depthFirstWal(root.left);
  let rightSide = depthFirstWal(root.right);
  return [root.val, ...leftSide, ...rightSide];
};

console.log(depthFirstWal1(a));

const breadthFirstValue = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }
  return values
}
console.log(breadthFirstValue(a));

const treeInclude = (root, target) => {
  if (!root === null) return null
  const queue = [root]
  while (queue.length > 0) {
    let current = queue.shift()
    if (current.val === target) return true;
    console.log(current.val)
    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }
  return false;
}
console.log(treeInclude(a, "e"));
// another way to do tree include
const treeIncludeAnotherWay = (root, target) => {
  if (root === null) return null
  if (root.val === target) return true
  return treeIncludeAnotherWay(root.left, target) || treeIncludeAnotherWay(root.right, target);

}
console.log(treeIncludeAnotherWay(a, "e"));

const treeSum = (root) => {
  if (root === null) return 0
  const queue = [root];
  let res = 0;
  while (queue.length > 0) {
    let current = queue.shift()
    res = + current;
    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }
  return res
}
console.log(treeSum(number_a));
//  another way to do treeSum 
const AnotherWayTreeSum = (root) => {
  if (root === null) return 0
  return root.val + AnotherWayTreeSum(root.left) + AnotherWayTreeSum(root.right);
}
console.log(AnotherWayTreeSum(number_a));

const minimumTree = (root) => {
  if (root === null) return Infinity;
  let queue = [root];
  let now = root.val;
  while (queue.length > 0) {
    let current = queue.shift();
    if (current > now) {
      now = current;
    }
    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }
  return now
}
console.log(minimumTree(number_a));

const treeMin = (root) => {
  let smallest = Infinity;
  const stack = [root]
  while (stack.length > 0) {
    let current = stack.pop();
    if (smallest > current.val) {
      smallest = current.val;
    }
    if (current.left !== null) stack.push(current.left)
    if (current.right !== null) stack.push(current.right)
  }
}

const treeMinAnotherWay = (root) => {
  if (root === null) return Infinity;
  const left = treeMinAnotherWay(root.left)
  const right = treeMinAnotherWay(root.right)
  return Math.min(root.val, left, right)
}
console.log(treeMinAnotherWay(number_a))

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val
 return Math.max(maxPathSum(root.left), maxPathSum(root.right)) + root.val + 1;
}
console.log(maxPathSum(number_a))