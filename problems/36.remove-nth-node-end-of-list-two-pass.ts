// Remove nth Node From End of List (Two Pass)
// npx ts-node 36.remove-nth-node-end-of-list-two-pass.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

var removeNthFromEnd = function (
  head: ListNode | null,
  n: number,
): ListNode | null {
  let sentinel = new ListNode(0);
  sentinel.next = head;

  // Finding lenght of the list
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  // find the prev position;
  let prevPosition = length - n;

  let prev = sentinel;

  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next!;
  }

  if (prev.next) {
    prev.next = prev.next.next;
  }

  return sentinel.next;
};


// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const updatedHead = removeNthFromEnd(head, n);

// Print updated list
let current: ListNode | null = updatedHead;
while (current !== null) {
  console.log(current.val); // Output: 1, 2, 3, 5
  current = current.next;
}

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) because we are modifying the linked list in place and not using any extra space.