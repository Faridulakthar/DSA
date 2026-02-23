// 40. Merge Two Sorted Lists
// npx ts-node 40.merge-two-sorted-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = function (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = null;

  if (l1.val < l2.val) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }

  let start = curr;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (!l1) {
    curr.next = l2;
  }

  if (!l2) {
    curr.next = l1;
  }

  return start;
};

// Example usage:
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const mergedHead = mergeTwoLists(l1, l2);

// Print merged list
let current: ListNode | null = mergedHead;
while (current !== null) {
  console.log(current.val); // Output: 1, 1, 2, 3, 4, 4
  current = current.next;
}

// Time complexity: O(n + m) where n and m are the number of nodes in the two linked lists
// Space complexity: O(1) because we are modifying the linked list in place and not using any extra space.
