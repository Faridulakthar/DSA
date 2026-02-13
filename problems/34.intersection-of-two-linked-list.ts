// 34. Intersections of Two Linked Lists
// npx ts-node 34.intersection-of-two-linked-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const getIntersectionNode = function (
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  // Put all the nodes of headB inside a set
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  // check for each element of headA inside the store(set)
  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }

  return null;
};

// Example usage:
const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);

const headB = new ListNode(4);
headB.next = headA.next; // Intersection at node with value 2

const intersectionNode = getIntersectionNode(headA, headB);
console.log(
  "Intersection node value:",
  intersectionNode ? intersectionNode.val : null,
); // Output: Intersection node value: 2

// Time complexity: O(n + m) where n and m are the number of nodes in headA and headB respectively
// Space complexity: O(m) where m is the number of nodes in headB because we are storing all the nodes of headB in a set.

// Note: we can use brute force method to solve this problem by checking each node of headA with each node of headB but that will have a time complexity of O(n * m) which is not efficient. The above solution is more efficient with a time complexity of O(n + m).
// using hashMap / set method is a optimal solution.
