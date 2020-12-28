/* eslint-disable max-classes-per-file */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
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

  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;
    this.tail = this.tail.prev;
    this.length -= 1;

    if (this.length !== 0) {
      this.tail.next = null;
    } else {
      this.head = null;
      // this.tail = null;
    }

    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length !== 0) {
      this.head.prev = null;
    } else {
      // this.head = null;
      this.tail = null;
    }

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
    if (idx < 0 || idx >= this.length) return undefined;

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
    const { prev } = this.get(idx);

    newNode.next = prev.next;
    newNode.prev = prev;
    prev.next = newNode;
    this.length += 1;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const removed = this.get(idx);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    this.length -= 1;

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

const list = new DoublyLinkedLists();

list.push(1);
list.pop();
list.printAsArr();
// list.printListInstance();
list.reverse();
list.printAsArr();
// list.printListInstance();
