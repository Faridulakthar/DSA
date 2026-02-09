// 31. Reverse Linked List
// npx ts-node 31.reverse-linked-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

var reverseList = function (head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Before remove the current node, store it to temp variable because we need to access this node after remove it.
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = reverseList(head);

// Print reversed list
let current: ListNode | null = reversedHead;
while (current !== null) {
  console.log(current.val); // Output: 5, 4, 3, 2, 1
  current = current.next;
}
