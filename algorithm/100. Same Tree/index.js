
var isSameTree = function (a, b) {
    if (!a && !b) return true
    if (!a || !b) return false
    return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
};