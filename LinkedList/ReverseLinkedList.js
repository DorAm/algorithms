/**
 * Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Time: O(n)
 * Space: O(n)
 *
 **/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function ReverseLinkedList(head) {
    let current = head;
    let tailPointer = undefined;
    let newNode = null;
    while (current) {
        newNode = new ListNode(current.val, tailPointer);
        tailPointer = newNode;
        current = current.next;
    }
    return newNode;
}

let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, undefined)))));
let reversedList = ReverseLinkedList(list);
