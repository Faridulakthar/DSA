// 37. Remove Duplicates from Sorted List
// npx ts-node 37.remove-duplicates-from-sorted-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const deleteDuplicates = function (head: ListNode | null): ListNode | null {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

const updatedHead = deleteDuplicates(head);

// Print updated list
let current: ListNode | null = updatedHead;
while (current !== null) {
  console.log(current.val); // Output: 1, 2, 3
  current = current.next;
}

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) because we are modifying the linked list in place and not using any extra space.
