/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replace(/\-/g,'').split('').join('-')


    if(!s.includes('-')) {
        s = s.split('').join('-')
        }
    
    const [firstGroup, ...rest] = s.split('-');

    const characters = rest.map((str) => str.split('')).flat();

    let result = firstGroup;
    const restOfFullGroup = characters.length % k
    
    if(restOfFullGroup) {
        result += characters.splice(0,restOfFullGroup).join('');
    }

    while(characters.length > 0) {
        const str = characters.splice(0, k).join('');
        result += '-'.concat(str);
    }


    return result.toUpperCase();
};

result = licenseKeyFormatting("2-5g-3-J",2)

console.log('final result, expected to be "2-5G-3J": ', result)


result = licenseKeyFormatting("2-4A0r7-4k",3)

console.log('final result, expected to be "24-A0R-74K": ', result)


result = licenseKeyFormatting("aaaa",2)

console.log('final result, expected to be "AA-AA": ', result)