
/*
Runtime
    106ms
    Beats 67.49% of users with JavaScript
Memory
    55.67MB
    Beats 58.53% of users with JavaScript
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    let current = head;
    let carryOn = 0;

    while (l1 !== null || l2 !== null || carryOn !== 0) {
        const value1 = l1?.val ?? 0;
        const value2 = l2?.val ?? 0;

        const sum = value1 + value2 + carryOn;
        carryOn = Math.floor(sum/10);
        const total = sum % 10;
        
        const node = new ListNode(total)
        current.next = node
        current = node

        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }

    return head.next;
    
};