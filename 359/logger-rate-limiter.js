
/*
Runtime 133ms
    Beats56.13%of users with JavaScript
Memory 62.58MB
    Beats70.09%of users with JavaScript
*/

var Logger = function() {
    this.hashMap = new Map(); // {message: timestamp}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.hashMap.has(message)) {
        if(timestamp < this.hashMap.get(message) + 10) {
            return false;
        }
    }

    this.hashMap.set(message, timestamp);
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */