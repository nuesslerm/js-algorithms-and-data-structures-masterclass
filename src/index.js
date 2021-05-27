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
 *
 * queue
 * * FIFO - first-in-first-out
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
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // we're implementing pop as the singly-linked list's unshift method to achieve constant time
    // create a new node with that value
    const newNode = new Node(val);

    // if there are no nodes in the stack, set the first and last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      // increment size by 1
      return (this.size += 1);
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
console.log(stack2.push('first'));
console.log(stack2.push('second'));
console.log(stack2.push('third'));
console.log('🚀 ~ file: index.js ~ line 79 ~ stack2', stack2);
console.log(stack2.pop()?.val);
console.log(stack2.pop()?.val);
console.log(stack2.pop()?.val);
console.log(stack2.pop()?.val);
console.log(stack2.pop()?.val);
console.log('🚀 ~ file: index.js ~ line 79 ~ stack2', stack2);

/**
 * stacks BIG-O
 * * insertion - O(1)
 * * removal - O(1)
 * * searching - O(n) -> need to traverse entire linked list / if this is required, we should probably not use stacks in the first place
 * * access / get - O(n) -> need to traverse entire linked list / if this is required, we should probably not use stacks in the first place
 */
