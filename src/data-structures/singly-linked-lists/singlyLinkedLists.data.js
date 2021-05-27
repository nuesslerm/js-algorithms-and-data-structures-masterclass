/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */
// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you?');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length += 1;
      return this;
    }

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return current;
    }

    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead;
    }

    this.head = oldHead.next;
    this.length -= 1;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return (this.length += 1);
    }

    newNode.next = this.head;
    this.head = newNode;
    return (this.length += 1);
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter < idx) {
      current = current.next;
      counter += 1;
    }

    return current;
  }

  set(idx, newVal) {
    const foundNode = this.get(idx);
    if (!foundNode) return false;

    foundNode.val = newVal;
    return true;
  }

  insert(idx, insertedVal) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return Boolean(this.push(insertedVal));
    if (idx === 0) return Boolean(this.unshift(insertedVal));

    const newNode = new Node(insertedVal);
    const prev = this.get(idx - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length += 1;
    return true;

    // const newNode = new Node(insertedVal);

    // if (idx === 0) {
    //   this.unshift(insertedVal);
    //   return true;
    // }

    // const foundNode = this.get(idx - 1);
    // if (!foundNode) return false;

    // newNode.next = foundNode.next;
    // foundNode.next = newNode;
    // this.length += 1;

    // return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }

  reverse() {
    let prev = null;
    let trueNext;
    let current = this.head;

    while (current) {
      // trueNext = current.next && { ...current.next }; // becomes one shorter each iteration
      trueNext = current.next; // becomes one shorter each iteration
      current.next = prev; // becomes one longer each iteration
      prev = current;
      current = trueNext;
    }

    const temp = this.head;
    this.head = prev;
    this.tail = temp;

    return this;

    // let current = this.head;
    // this.head = this.tail;
    // this.tail = current;

    // let prev = null;
    // let next;

    // for (let i = 0; i < this.length; i++) {
    //   next = current.next;
    //   current.next = prev;
    //   prev = current;
    //   current = next;
    // }

    // return this;
  }

  printAsArr() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  printListInstance() {
    console.log(this);
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(6);
list.printAsArr();
list.printListInstance();
list.reverse();
list.printAsArr();
list.printListInstance();

/*
 * insertion at start or end - O(1)
 * insertion in middle - O(1) to O(n)
 * removal at start or end - O(1)
 * removal in middle- O(1) to O(n)
 * searching - O(n)
 * access - O(n)
 *
 * linked lists excell at insertion and deletion
 * arrays are best for random access
 */
