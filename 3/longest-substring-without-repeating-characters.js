/*
Runtime
    81ms
    Beats 71.42% of users with TypeScript

Memory
    52.84MB
    Beats 85.62% of users with JavaScript
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const hashMap = new Map()
    let maxLen = 0
    let tail = 0

    for (let head = 0; head < s.length; head++) {
        
        const hashMapHasTheKey = hashMap.has(s[head])
        const isTheKeyInsideTheWindow = hashMap.get(s[head]) >= tail
        if (hashMapHasTheKey && isTheKeyInsideTheWindow) {
            tail = hashMap.get(s[head]) + 1
        }
        
        hashMap.set(s[head], head) //Adicionando ao map a letra com o index em que ela foi vista pela última vez
        maxLen = Math.max(maxLen, head - tail + 1)

    }

    return maxLen
};

result = lengthOfLongestSubstring('abcabcbb')

console.log('final result', result)

