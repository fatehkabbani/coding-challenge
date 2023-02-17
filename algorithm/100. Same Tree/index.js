var isSameTree = (a , b) => JSON.stringify(a) === JSON.stringify(b) ? true : false
// another way to do it is 
var isSameTree = (a , b) => {
    if(!a && !b) return true
    if(!a || !b) return false
    return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
}