// Remove Linked List Elements
// npx ts-node 35.remove-linked-list-element.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const removeElements = function (
  head: ListNode | null,
  val: number,
): ListNode | null {
  let sentinel = new ListNode(0);
  sentinel.next = head;

  let prev = sentinel;
  let current = head;

  while (current !== null) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return sentinel.next;
};


// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

const valToRemove = 6;
const updatedHead = removeElements(head, valToRemove);

// Print updated list
let current: ListNode | null = updatedHead;
while (current !== null) {
  console.log(current.val); // Output: 1, 2, 3, 4, 5
  current = current.next;
}

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) because we are modifying the linked list in place and not using any extra space.  