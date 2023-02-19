var zigzagLevelOrder = function (root) {
    if (!root) return []
    const rootHold = [root];
    const resault = []
    let n = 0;
    while (rootHold.length) {
        let length = rootHold.length
        if (n % 2 === 0) {
            resault.push(rootHold.map(node => node.val));
        } else {
            resault.push(rootHold.map(node => node.val).reverse())
        }
        n++;
        while (length--) {
            let node = rootHold.shift();
            if (node.left) {
                rootHold.push(node.left)
            };
            if (node.right) {
                rootHold.push(node.right);
            }
        }
    }
    return resault;
};