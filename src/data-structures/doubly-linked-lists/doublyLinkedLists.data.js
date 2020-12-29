/* eslint-disable max-classes-per-file */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  // test again
  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return oldTail;
    }

    this.tail = oldTail.prev;
    this.tail.next = null;
    this.length -= 1;
    oldTail.prev = null; // removing lingering prev connections from popped tail

    return oldTail;
  }

  // test again
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return oldHead;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    this.length -= 1;
    oldHead.next = null; // removing lingering next connections from shifted head

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;

    if (idx <= this.length / 2) {
      let current = this.head;
      while (counter < idx) {
        current = current.next;
        counter += 1;
      }

      return current;
    }

    let current = this.tail;
    while (counter < this.length - idx - 1) {
      current = current.prev;
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
    const beforeNode = this.get(idx);
    const afterNode = beforeNode.next;

    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    beforeNode.next = newNode;
    this.length += 1;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const removed = this.get(idx);
    const beforeRemoved = removed.prev;
    const afterRemoved = removed.next;

    beforeRemoved.next = afterRemoved;
    afterRemoved.prev = beforeRemoved;
    this.length -= 1;
    removed.prev = null; // removing lingering prev connections from removed node
    removed.next = null; // removing lingering next connections from removed node

    return removed;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let current = this.head;

    while (current) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      current = current.next;
    }

    return this;
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

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.set(23, 23);
list.printAsArr();
// list.printListInstance();
list.reverse();
list.printAsArr();
// list.printListInstance();
