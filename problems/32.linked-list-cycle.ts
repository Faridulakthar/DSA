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
  // if the head is null, there is no cycle in the linked list
  if (!head) return false;

//   useing JS Hash map method
//   let nodes = new Set();
//   let current = head;
//   while (current !== null) {
//       if (nodes.has(current)) {
//           return true
//       }
//       nodes.add(current);
//       current = current.next;
//   }
//   return false

  // using Floyd's Algorithm;
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }

    slow = slow.next!;
    fast = fast.next.next;
  }
  return true;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head; // Creates a cycle

console.log("Has cycle:", hasCycle(head)); // Output: Has cycle: true
