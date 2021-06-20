/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */
/**
 * tree traversal (applicable to all trees)
 * problem: how to visit every node of a tree once
 * two approaches:
 * * breadth-first search visits every node by following along the siblings of each layer of the tree
 *   ie. going across the tree
 * * depth-first search visits every node by following along each branch of the tree (from left to right)
 *   ie. going to the leafs of the tree and then going back up
 *   * InOrder
 *   * PreOrder
 *   * PostOrder
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current.value !== newNode.value) {
      if (newNode.value < current.value) {
        if (!current.left) current.left = newNode;
        current = current.left;
      }

      if (newNode.value > current.value) {
        if (!current.right) current.right = newNode;
        current = current.right;
      }
    }

    return this;
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;
    while (value !== current.value) {
      if (value < current.value) {
        if (!current.left) return undefined;
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) return undefined;
        current = current.right;
      }
    }

    return current;
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    while (value !== current.value) {
      if (value < current.value) {
        if (!current.left) return false;
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) return false;
        current = current.right;
      }
    }

    return true;
  }

  toString() {
    return JSON.stringify(this.root, null, 2);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
      return (this.size = 1);
    }

    this.last.next = newNode;
    this.last = this.last.next;
    return (this.size += 1);
  }

  dequeue() {
    if (!this.first) return new Node(undefined);
    const oldFirst = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return oldFirst;
    }

    this.first = oldFirst.next;
    this.size -= 1;
    return oldFirst;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

/**
 * Breadth First Search
 */

// with array as queue
function breadthFirstSearch(bst) {
  const queue = [];
  const visited = [];

  queue.unshift(bst.root);

  while (queue.length) {
    const dequeued = queue.pop();
    // similar to pre-order
    visited.push(dequeued.value);

    if (dequeued.left) queue.unshift(dequeued.left);
    if (dequeued.right) queue.unshift(dequeued.right);
  }

  return visited;
}

// console.log(breadthFirstSearch(tree));

// with custom queue data structure
function breadthFirstSearch2(bst) {
  const queue = new Queue();
  const visited = [];

  queue.enqueue(bst.root);

  while (queue.size) {
    const dequeued = queue.dequeue().value;
    // similar to pre-order
    visited.push(dequeued.value);

    if (dequeued.left) queue.enqueue(dequeued.left);
    if (dequeued.right) queue.enqueue(dequeued.right);
  }

  return visited;
}

// console.log(breadthFirstSearch2(tree));

/**
 * Depth First Search
 */

// pre-order, without helper function
function depthFirstSearchPreOrder({ root }, visited = []) {
  visited.push(root.value);
  if (root.left) depthFirstSearchPreOrder({ root: root.left }, visited);
  if (root.right) depthFirstSearchPreOrder({ root: root.right }, visited);

  return visited;
}

// console.log(depthFirstSearchPreOrder(tree));

function depthFirstSearchPreOrder2(bst) {
  const visited = [];

  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(bst.root);

  return visited;
}

console.log('pre-order: ', depthFirstSearchPreOrder2(tree));

// post-order
function depthFirstSearchPostOrder(bst) {
  const visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  }

  traverse(bst.root);

  return visited;
}

console.log('post-order: ', depthFirstSearchPostOrder(tree));

// in-order
function depthFirstSearchInOrder(bst) {
  const visited = [];

  function traverse(node) {
    // eslint-disable-next-line no-unused-expressions
    node.left && traverse(node.left);
    visited.push(node.value);
    // eslint-disable-next-line no-unused-expressions
    node.right && traverse(node.right);
  }

  traverse(bst.root);

  return visited;
}

console.log('in-order: ', depthFirstSearchInOrder(tree));

/**
 * BFS or DFS?
 * time complexity of both BFS and DFS is the same. they're both O(log n)
 * space complexity on a wide tree that is deep is much larger for BFS
 * space complexity on a deep tree that is narrow is larger for DFS because we have to keep the recursion calls in memory
 *
 * when to use the different DFS orders?
 * InOrder
 * * used commonly with BST's.
 * * we get all nodes in the tree in order from left to right, from bottom to top
 * * the return is all nodes sorted from lowest to highest, e.g. [ 3, 6, 8, 10, 15, 20 ]
 * PreOrder
 * * we get all nodes in the tree in order from left to right, from top to bottom
 * * can be used to "export" a tree structure so that it is easily reconstructed or copied
 *
 * recap:
 * * trees are non-linear data structures that contain a root and child nodes
 * * binary trees can have values of ANY type, but AT MOST TWO CHILDREN for each parent
 * * BSTs are a more specific version of binary trees where every node to the left of a parent
 *   is less than its value and every node to the right is greater
 * * we can search through trees using BFE and DFS
 */
