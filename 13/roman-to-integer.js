/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToInteger = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    const reversedString = s.split('').reverse().join('')
    
    let total = 0;
    let previousNumber = 0;
    for (let i = 0; i < reversedString.length; i++) {
        const char = reversedString[i];
        const currentNumber = romanToInteger[char];

        if (currentNumber >= previousNumber) {
            total += currentNumber;
        } else {
            total -= currentNumber;
        }

        previousNumber = currentNumber

    }

    return total;

};


result = romanToInt("MCMXCIV")

console.log('final result', result)