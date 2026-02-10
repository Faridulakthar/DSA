// 32. Linked list Cycle
// npx ts-node 32.linked-list-cycle.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const hasCycle = function (head: ListNode | null): boolean {
  let nodes = new Set();

  let current = head;

  while (current !== null) {
    if (nodes.has(current)) {
      return true;
    }
    nodes.add(current);
    current = current.next;
  }

  return false;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head; // Creates a cycle

console.log("Has cycle:", hasCycle(head)); // Output: Has cycle: true
