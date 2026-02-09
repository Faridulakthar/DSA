// 29. Design Linked List
// npx ts-node 29.design-linked-list.ts

export {};

class Node {
  val: number;
  next: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    let current: Node | null = this.head;

    for (let i = 0; i < index; i++) {
      if (current) current = current.next;
    }

    return current ? current.val : -1;
  }

  addAtHead(val: number): void {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current: Node = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    const newNode = new Node(val);
    let current: Node | null = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (current) current = current.next;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }

    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0 && this.head) {
      this.head = this.head.next;
    } else {
      let current: Node | null = this.head;

      for (let i = 0; i < index - 1; i++) {
        if (current) current = current.next;
      }

      if (current && current.next) {
        current.next = current.next.next;
      }
    }

    this.size--;
  }
}

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
console.log(linkedList.get(1)); // returns 2
linkedList.deleteAtIndex(1); // now the linked list is 1->3
console.log(linkedList.get(1)); // returns 3    



// LeedCode JavaScript solution for reference:

// function Node(val) {
//   this.val = val;
//   this.next = null;
// }

// var MyLinkedList = function () {
//   this.head = null;
//   this.size = 0;
// };

// /**
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function (index) {
//   if (index < 0 || index >= this.size) return -1;

//   let current = this.head;

//   for (let i = 0; i < index; i++) {
//     current = current.next;
//   }

//   return current.val;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function (val) {
//   let newNode = new Node(val);
//   newNode.next = this.head;
//   this.head = newNode;
//   this.size++;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function (val) {
//   let newNode = new Node(val);

//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   this.size++;
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {
//   if (index < 0 || index > this.size) return;

//   if (index === 0) {
//     this.addAtHead(val);
//     return;
//   }

//   if (index === this.size) {
//     this.addAtTail(val);
//     return;
//   }

//   let newNode = new Node(val);
//   let current = this.head;

//   for (let i = 0; i < index - 1; i++) {
//     current = current.next;
//   }

//   newNode.next = current.next;
//   current.next = newNode;

//   this.size++;
// };

// /**
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {
//   if (index < 0 || index >= this.size) return;

//   if (index === 0) {
//     this.head = this.head.next;
//   } else {
//     let current = this.head;

//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }

//     current.next = current.next.next;
//   }

//   this.size--;
// };
