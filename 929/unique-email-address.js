/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    const uniqueEmails = new Set();

    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];

        if(!email.includes('@')) {
            continue;
        }

        
        let [localName, domainName] = email.split('@');

        localName = localName.replace(/\./g,'').split('+')[0];
        
        uniqueEmails.add(`${localName}@${domainName}`);    
    }

    return uniqueEmails.size;

};

result = numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])

console.log('final result', result)