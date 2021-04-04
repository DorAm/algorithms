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


function PalindromeLinkedList(head) {
    let currListNode = head;
    let currReversedListNode = ReverseLinkedList(head);
    while (currListNode) {
        if (currListNode.val !== currReversedListNode.val) {
            return false;
        }
        currListNode = currListNode.next;
        currReversedListNode = currReversedListNode.next;
    }
    return true;
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

debugger;
let list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, undefined))));
let list = new ListNode(1, new ListNode(2, undefined));
PalindromeLinkedList(list);
