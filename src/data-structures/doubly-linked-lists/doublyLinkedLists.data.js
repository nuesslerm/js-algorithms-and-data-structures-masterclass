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
      this.tail = this.tail.next;
    }

    this.length += 1;

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  printList() {
    console.log(this);
  }
}

const list = new DoublyLinkedLists();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.print();
list.printList();
