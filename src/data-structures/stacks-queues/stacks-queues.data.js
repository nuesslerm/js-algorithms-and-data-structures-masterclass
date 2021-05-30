/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */
/**
 * stack
 * * LIFO - last-in-first-out
 * * the last element that you push in, is going to be the first thing that is going to be popped off
 * * last thing added in, first thing removed
 * * where stacks are used:
 *   * managing function invocations
 *   * undo / redo
 *   * routing (the history object) is treated like a stack
 */

// // creating a stack with an array
// const stack = [];
// stack.push('google');
// stack.push('instagram');
// stack.push('youtube');
// stack.pop();
// console.log(stack);

// // other direction
// const stack1 = [];
// stack1.unshift('google');
// stack1.unshift('facebook');
// stack1.unshift('youtube');
// stack1.shift();
// console.log(stack1);

// how to build a stack without using the array data structure
// build it using the singly linked list data structure

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    // we're implementing pop as the singly-linked list's unshift method to achieve constant time
    // create a new node with that value
    const newNode = new Node(value);

    // if there are no nodes in the stack, set the first and last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      // increment size by 1
      return (this.size = 1);
    }

    // if there is at least one node, set next property on newNode to current this.first
    newNode.next = this.first;
    // update this.first to be the newNode
    this.first = newNode;
    // increment size by 1
    return (this.size += 1);
  }

  pop() {
    // we're implementing pop as the singly-linked list's shift method to achieve constant time
    // if there are no nodes in the stack, return undefined
    if (!this.first) return undefined;

    // create a temp variable to store the first property of the stack
    const oldFirst = this.first;

    // if there is only 1 node, set the first and last property to be null
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      // size is 0
      this.size = 0;
      // return oldFirst
      return oldFirst;
    }

    // if there is more than one node, set the first property to be the next property of oldFirst
    this.first = oldFirst.next;
    // decrement size by 1
    this.size -= 1;
    // return oldFirst
    return oldFirst;
  }
}

const stack2 = new Stack();
// console.log(stack2.push('first'));
// console.log(stack2.push('second'));
// console.log(stack2.push('third'));
// console.log('🚀 ~ file: index.js ~ line 79 ~ stack2', stack2);
// console.log(stack2.pop()?.value);
// console.log(stack2.pop()?.value);
// console.log(stack2.pop()?.value);
// console.log(stack2.pop()?.value);
// console.log(stack2.pop()?.value);
// console.log('🚀 ~ file: index.js ~ line 79 ~ stack2', stack2);

/**
 * stacks BIG-O
 * * insertion - O(1)
 * * removal - O(1)
 * * searching - O(n) -> need to traverse entire linked list / if this is required, we should probably not use stacks in the first place
 * * access / get - O(n) -> need to traverse entire linked list / if this is required, we should probably not use stacks in the first place
 */

/**
 * queue
 * * FIFO - first-in-first-out
 * example: print queue
 */

// // creating a queue with an array
// const queue = [];

// // can use push for insert and shift for extracting
// console.log(queue.push('FIRST'));
// console.log(queue.push('SECOND'));
// console.log(queue.push('THIRD'));
// console.log('🚀 ~ file: index.js ~ line 127 ~ queue', queue);

// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());

// // can use unshift for insert and pop for extracting
// console.log(queue.unshift('FIRST'));
// console.log(queue.unshift('SECOND'));
// console.log(queue.unshift('THIRD'));
// console.log('🚀 ~ file: index.js ~ line 127 ~ queue', queue);

// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());

// // both will lead to reindexing of the entire array for one of the methods used

// creating a queue class

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // function accepts some value
  enqueue(value) {
    // create a new node using that value passed to the function
    const newNode = new Node(value);

    // if there are no nodes in the queue, set this node to be this.first and this.last,
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
      // set and return this.size as 1
      return (this.size = 1);
    }

    // otherwise, set this.next on the current this.last node of the queue to be the newNode
    // set the new this.last of the queue to be the this.next node of the old this.last node of the queue
    this.last.next = newNode;
    this.last = this.last.next;
    // increment and return this.size
    return (this.size += 1);
  }

  dequeue() {
    // if there is no first property, return new Node with value = undefined
    if (!this.first) return new Node(undefined);
    // store this.first of the queue in a temporary variable
    const oldFirst = this.first;

    // check if this.size is 1 (check if this.first and this.last are the same, e.g. with Object.is or via === comparison operator),
    if (this.first === this.last) {
      // if so set this.first and this.last to be null
      this.first = null;
      this.last = null;
      // set this.size to be 0,
      this.size = 0;
      // return oldFirst
      return oldFirst;
    }

    // if there is more than 1 node, set this.first to be this.first.next
    this.first = oldFirst.next;
    // decrement this.size by 1
    this.size -= 1;
    // return oldFirst
    return oldFirst;
  }
}

const queue2 = new Queue();

console.log(queue2.enqueue('FIRST'));
console.log(queue2.enqueue('SECOND'));
console.log(queue2.enqueue('THIRD'));
console.log('🚀 ~ file: index.js ~ line 207 ~ queue2', queue2);
console.log(queue2.dequeue().value);
console.log(queue2.dequeue().value);
console.log(queue2.dequeue().value);
console.log(queue2.dequeue().value);
console.log(queue2.dequeue().value);
console.log(queue2.dequeue().value);
console.log(queue2.enqueue('FIRST'));
console.log(queue2.dequeue().value);
console.log(queue2.dequeue().value);

/**
 * queue BIG-O
 * custom queue class has constant time for enqueue and dequeue
 * insertion - O(1)
 * removal - O(1)
 * searching - O(n)
 * access / get - O(n)
 *
 * * queue: FIFO - first-in-first-out
 * * stack: LIFO - last-in-first-out
 */
