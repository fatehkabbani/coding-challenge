# 1779. Find Nearest Point That Has the Same X or Y Coordinate

[LeetCode](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

this is a javascript function, called nearestValidPoint, that takes three parameters, x, y, and points. The function will return the index of the nearest valid point that shares the same x-coordinate or y-coordinate with the point (x, y). If there are multiple nearest points, return the smallest index. If there is no valid point, return -1.

```js
var nearestValidPoint = function (x, y, points) {
  let min = Infinity
  let index = -1
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i]
    if (x1 === x || y1 === y) {
      const distance = Math.abs(x - x1) + Math.abs(y - y1)
      if (distance < min) {
        min = distance
        index = i
      }
    }
  }
  return index
}
```

Here's how it works:

## 1. Create a nearestValidPoint function

The first step is to create a nearestValidPoint function. The nearestValidPoint function will take three parameters, x, y, and points. The function will return the index of the nearest valid point that shares the same x-coordinate or y-coordinate with the point (x, y). If there are multiple nearest points, return the smallest index. If there is no valid point, return -1.

```js
function nearestValidPoint(x, y, points) {}
```

## 2. Create a min variable

The next step is to create a min variable. The min variable will be used to keep track of the minimum distance between the point (x, y) and the points in the points array.

```js
let min = Infinity
```

## 3. Create an index variable

The next step is to create an index variable. The index variable will be used to keep track of the index of the nearest valid point.

```js
let index = -1
```

## 4. Loop through the points

The next step is to loop through the points. The points will be looped through and the distance between the point (x, y) and the points in the points array will be calculated. If the distance is less than the min variable, the min variable will be updated to the distance and the index variable will be updated to the index of the point.

```js
for (let i = 0; i < points.length; i++) {
  const [x1, y1] = points[i]
  if (x1 === x || y1 === y) {
    const distance = Math.abs(x - x1) + Math.abs(y - y1)
    if (distance < min) {
      min = distance
      index = i
    }
  }
}
```

## 5. Return the index

The last step is to return the index. The index variable will be returned.

```js
return index
```

## 6. Call the function

The function can be called like this:

```js
console.log(nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]])) // 2
```