

/*
Runtime
79ms
Beats24.52%of users with JavaScript
Memory
56.35MB
Beats99.52%of users with JavaScript

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { // Algoritmo de Kadane
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i ++) {
        const currentNumber = nums[i]

        maxEndingHere = Math.max(currentNumber, currentNumber + maxEndingHere)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }


    return maxSoFar

};

result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

console.log('final result', result)