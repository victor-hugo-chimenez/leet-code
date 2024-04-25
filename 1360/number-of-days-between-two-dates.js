/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const millisInADay = 1000*60*60*24
    
    const firstDate = new Date(date1);
    const secondDate = new Date(date2)

    return Math.abs(firstDate-secondDate)/millisInADay

};



result = daysBetweenDates("2019-06-29", "2019-06-30")

console.log('final result', result)