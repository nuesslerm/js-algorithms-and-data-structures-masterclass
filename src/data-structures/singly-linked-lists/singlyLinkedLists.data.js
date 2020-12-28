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
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length -= 1;

    if (this.length === 0) {
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
    if (idx < 0 || idx >= this.length) return false;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }
}

const list = new SinglyLinkedList();

console.log(
  'singlyLinkedList',
  1,
  list.unshift(32),
  2,
  list.push(13),
  list.insert(1, 12),
  list.remove(2),
  'newList',
  list
);
