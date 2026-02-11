// 33. Palindrome Linked List
// npx ts-node 33.palindrome-linked-list.ts

export {};

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}
const isPalindrome = function (head: ListNode | null): boolean {
  // find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null && slow !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of the list
  let prev = null;
  let current = slow;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  // checking for palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList !== null && firstList !== null) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log("Is palindrome:", isPalindrome(head)); // Output: Is palindrome: true

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) because we are reversing the linked list in place and not using any extra space.