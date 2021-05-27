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

// creating a stack with an array
const stack = [];
stack.push('google');
stack.push('instagram');
stack.push('youtube');
stack.pop();
console.log(stack);

// other direction
const stack1 = [];
stack1.unshift('google');
stack1.unshift('facebook');
stack1.unshift('youtube');
stack1.shift();
console.log(stack1);
