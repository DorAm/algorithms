/**
 * Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse
 * order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Time: O(n)
 * Space: O(n)
 *
 **/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function AddTwoNumbers(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let carry = 0;
    let dummyHead = new ListNode(undefined, undefined);
    let prev = dummyHead;
    while (curr1 || curr2) {
        let digit1 = curr1 ? curr1.val : 0;
        let digit2 = curr2 ? curr2.val : 0;
        let sum = digit1 + digit2 + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        let node = new ListNode(digit, undefined);
        prev.next = node;
        prev = node;
        curr1 = curr1?.next;
        curr2 = curr2?.next;
    }
    if (carry === 1) {
        prev.next = new ListNode(1, undefined);
    }
    return dummyHead.next;
}
