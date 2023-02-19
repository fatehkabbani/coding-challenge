var nearestValidPoint = function(x, y, points) {
    let min = Infinity;
    let index = -1;
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        if (x1 === x || y1 === y) {
        const distance = Math.abs(x - x1) + Math.abs(y - y1);
        if (distance < min) {
            min = distance;
            index = i;
        }
        }
    }
    return index;
};
console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]]));