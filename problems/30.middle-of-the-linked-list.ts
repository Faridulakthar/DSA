// 30. Middle of the linked list
// npx ts-node 30.middle-of-the-linked-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

var middleNode = function (head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null && slow !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middle = middleNode(head);
console.log("Middle node value:", middle ? middle.val : null); // Output: Middle node value: 3
