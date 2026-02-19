// 38. Odd Even Linked List
// npx ts-node 38.odd-even-linked-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const oddEvenList = function (head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next!;
    even = even.next!;
  }

  odd.next = evenStart;
  return head;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const updatedHead = oddEvenList(head);

// Print updated list
let current: ListNode | null = updatedHead;
while (current !== null) {
  console.log(current.val); // Output: 1, 3, 5, 2, 4
  current = current.next;
}

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) because we are modifying the linked list in place and not using any extra space.
