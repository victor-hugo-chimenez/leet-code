
 class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(0);
    let tail = head

    if(!list1) {
        return list2
    }

    if(!list2) {
        return list1
    }
    
    while(list1) {
        if( list1.val <= list2?.val) {
            tail.next = list1
            tail = list1 ?? tail
            list1 = list1?.next
        } else {
            tail.next = list2
            tail = list2 ?? tail
            list2 = list2?.next
        }
    }

    while(list2) {
        tail.next = list2
        tail = list2
        list2 = list2?.next
    }

    return head.next
};

const list1_1 = new ListNode(1)
const list2_1 = new ListNode(2)


result = mergeTwoLists(list1_1, list2_1)

console.log('final result', result)