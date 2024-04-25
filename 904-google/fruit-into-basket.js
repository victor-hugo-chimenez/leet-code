/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let maxFruits = 0;        
    let left = 0;     
    const countMap = new Map();

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        countMap.set(fruit, (countMap.get(fruit) || 0) + 1);

        while (countMap.size > 2) {
            const leftFruit = fruits[left];
            countMap.set(leftFruit, countMap.get(leftFruit) - 1);
            if (countMap.get(leftFruit) === 0) {
                countMap.delete(leftFruit);
            }
            left++; 
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;

};

result = totalFruit([3,3,3,1,2,1,1,2,3,3,4])

console.log('final result', result)