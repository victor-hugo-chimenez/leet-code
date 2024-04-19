
/*
Runtime
79ms
Beats24.52%of users with JavaScript
Memory
56.35MB
Beats99.52%of users with JavaScript
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let tail = 0;

    for (let head = 0; head < prices.length; head++) {
        const dayToBuy = prices[tail]

        if (dayToBuy < prices[head]) {
            maxProfit = Math.max(maxProfit, prices[head] - dayToBuy) 
        } else {
            tail = head

        }
    }

    return maxProfit


};


result = maxProfit([7,1,5,3,6,4])

console.log('final result', result)