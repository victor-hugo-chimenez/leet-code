/*
Runtime
51ms
Beats89.31%of users with JavaScript
Memory
51.36MB
Beats48.72%of users with JavaScript
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    while (leftPointer < rightPointer) {
        if (height[leftPointer] <= height[rightPointer]) {
            leftMax = Math.max(leftMax, height[leftPointer])
            water += leftMax - height[leftPointer] 

            leftPointer++;
        } else {
            rightMax = Math.max(rightMax, height[rightPointer])
            water += rightMax - height[rightPointer]

            rightPointer --;
        }
    }

    return water
};

result = trap([0,1,0,2,1,0,1,3,2,1,2,1])

console.log('final result', result)