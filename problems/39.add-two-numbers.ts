// 39. Add Two Numbers
// npx ts-node 39.add-two-numbers.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = function (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let ans = new ListNode(0);
  let ansHead = ans;
  let carry = 0;

  //   we will iterate through both linked lists until we reach the end of both lists and there is no carry left. At each step, we will calculate the sum of the current digits and the carry, and create a new node with the digit value of the sum. We will also update the carry for the next iteration.
  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
};

// Example usage:
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);

// Print the result
let current = result;
while (current) {
  console.log(current.val); // Output: 7, 0, 8
  current = current.next;
}

// Time complexity: O(max(m, n)) where m and n are the lengths of the two linked lists.
// Space complexity: O(max(m, n)) because we are creating a new linked list to store the result.
