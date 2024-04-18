/*
Runtime
    99ms
    Beats 39.15% of users with JavaScript

Memory
    49.15MB
    Beats 91.48% of users with JavaScript
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const mySolutionofTwoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
    const x = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
        const y = nums[j]
        if (x+y === target) {
            return [i,j]
        }
    }
}
};

/*
Runtime
    44ms
    Beats 98.94% of users with JavaScript

Memory
    49.15MB
    Beats 91.48% of users with JavaScript
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashMap = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        const remainderToTarget = target - num

        const remainIndex = hashMap.get(remainderToTarget)

        if(remainIndex !== undefined) {
            return [remainIndex,i]
        }
        
        hashMap.set(num,i)

    }
};

result = twoSum([3,2,4], 6)

console.log('final result', result)