/*
Runtime
    106ms
    Beats 67.49% of users with JavaScript
Memory
    55.67MB
    Beats 58.53% of users with JavaScript
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Primeiro, ordenamos o array para facilitar a manipulação.
    const solutions = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Pular duplicatas.

        const target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                solutions.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++; // Pular duplicatas para o ponteiro esquerdo.
                while (left < right && nums[right] === nums[right + 1]) right--; // Pular duplicatas para o ponteiro direito.
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return solutions;
};

result = threeSum([-1,0,1,2,-1,-4])

console.log('final result', result)