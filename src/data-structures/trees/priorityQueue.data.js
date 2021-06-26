/* eslint-disable max-classes-per-file */
/**
 * Binary heaps
 * what is a binary heap?
 * * very similar to a binary search tree, but with some different rules
 * * in a maxBinaryHeap, parent nodes are always larger than child nodes
 * * in a minBinaryHeap, parent nodes are always smaller than child nodes
 * * no horizontal ordering is taking place, only vertical ordering
 *
 * max binary heap
 * * each parent has at most two child nodes
 * * the value of each parent node is always greater than its child nodes
 * * the parent is greater than the chldren, but there are no guarantees between sibling nodes
 * * it's as compact as possible:
 *   * all children of each nodes are as full as they can be
 *   * left children are filled out first
 *
 * why do we need to know this?
 * * used to implement Priority Queues which are very commonly used data structures
 * * used with graph traversal algorithms
 */

/**
 * representing a heap
 * can be represented by an array by flattening the binary heap tree structure - moving from left to right in each level horizontally
 * for any index of an array n
 * * the left child of a node is stored at 2n + 1
 * * the right child is at 2n + 2
 * what if we have a child node and want to find its parent
 * * for any child node at index n, its parent is at index Math.floor((n - 1) / 2)
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(values, index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex < 0 || values[index] <= values[parentIndex]) {
      return [...values];
    }

    const newValues = [...values];

    const parentValue = newValues[parentIndex];
    newValues[parentIndex] = newValues[index];
    newValues[index] = parentValue;

    return this.bubbleUp(newValues, parentIndex);
  }

  insert(value) {
    const newValues = [...this.values, value];
    const initialIndex = newValues.length - 1;

    // eslint-disable-next-line no-return-assign
    return (this.values = this.bubbleUp(newValues, initialIndex));
  }

  bubbleDown(values, index) {
    const firstIndex = index * 2 + 1;
    const secondIndex = index * 2 + 2;
    const newValues = [...values];

    // !values[firstIndex] is bad; should instead check for isNil(values[firstIndex])
    // if (!values[firstIndex] || firstIndex >= values.length) return newValues;
    if (firstIndex >= values.length) return newValues;

    const first = {
      idx: firstIndex,
      val: newValues[firstIndex],
    };
    const second = {
      idx: secondIndex,
      val: newValues[secondIndex],
    };
    const childIndex =
      second.val && second.val > first.val ? second.idx : first.idx;

    // swap value at index with childValue if value at index is smaller than child value
    const childValue = newValues[childIndex];
    if (newValues[index] > childValue) return newValues;

    newValues[childIndex] = newValues[index];
    newValues[index] = childValue;

    return this.bubbleDown(newValues, childIndex);
  }

  extractMax() {
    const [maxValue, ...rest] = this.values;

    if (rest.length === 0) {
      this.values = rest;
      return maxValue;
    }

    const minValue = rest.pop();
    const newValues = [minValue, ...rest];
    const initialIndex = 0;

    this.values = this.bubbleDown(newValues, initialIndex);
    return maxValue;
  }
}

const MBH = new MaxBinaryHeap();

MBH.insert(13);
MBH.insert(21);
MBH.insert(1);
MBH.insert(23);
MBH.insert(12);
console.log(MBH.values);

MBH.extractMax();
console.log(MBH.values);
MBH.extractMax();
console.log(MBH.values);
MBH.extractMax();
console.log(MBH.values);
MBH.extractMax();
console.log(MBH.values);
MBH.extractMax();
console.log(MBH.values);
MBH.extractMax();
console.log(MBH.values);

/**
 * Building a priority queue
 */

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  bubbleUp(nodes, index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (
      parentIndex < 0 ||
      nodes[index].priority >= nodes[parentIndex].priority
    ) {
      return [...nodes];
    }

    const newNodes = [...nodes];

    // swap node at index with node at parent index
    const parentNode = newNodes[parentIndex];
    newNodes[parentIndex] = newNodes[index];
    newNodes[index] = parentNode;

    return this.bubbleUp(newNodes, parentIndex);
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    const newNodes = [...this.nodes, node];
    const initialIndex = newNodes.length - 1;

    // eslint-disable-next-line no-return-assign
    return (this.nodes = this.bubbleUp(newNodes, initialIndex));
  }

  bubbleDown(nodes, index) {
    const firstIndex = index * 2 + 1;
    const secondIndex = index * 2 + 2;
    const newNodes = [...nodes];

    if (firstIndex >= nodes.length) return newNodes;

    const first = {
      idx: firstIndex,
      prio: newNodes[firstIndex]?.priority,
    };
    const second = {
      idx: secondIndex,
      prio: newNodes[secondIndex]?.priority,
    };
    const childIndex =
      second.prio && second.prio < first.prio ? second.idx : first.idx;

    // swap node at index with childNode if prio at node at index is larger than child node prio
    const childNode = newNodes[childIndex];
    if (newNodes[index].priority < childNode.priority) return newNodes;

    newNodes[childIndex] = newNodes[index];
    newNodes[index] = childNode;

    return this.bubbleDown(newNodes, childIndex);
  }

  dequeue() {
    const [minNode, ...rest] = this.nodes;

    if (rest.length === 0) {
      this.nodes = rest;
      return minNode;
    }

    const maxNode = rest.pop();
    const newNodes = [maxNode, ...rest];
    const initialIndex = 0;

    this.nodes = this.bubbleDown(newNodes, initialIndex);
    return minNode;
  }
}

const ER = new PriorityQueue();

ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 3);
console.log('1', ER.nodes);

ER.dequeue();
console.log(ER.nodes);
ER.dequeue();
console.log(ER.nodes);
ER.enqueue('broken arm', 2);
ER.enqueue('broken arm 2', 2);
ER.enqueue('broken arm 3', 2);
console.log(ER.nodes);
ER.dequeue();
console.log(ER.nodes);
ER.dequeue();
console.log(ER.nodes);

/**
 * Binary Heap - Big-O
 * insert, extractMax - worst case: log(n), because a binary heap is always balanced, unlike a BST structure
 * search - worst case O(n) -> worst case it would need to traverse all the nodes in the heap to find the sought-after node
 *
 * Recap:
 * * binary heaps are very useful data structures for sorting, and implementing other data structures like priority queues
 * * binary heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being larger or smaller than their children
 * * with just a little bit of math we can represent heaps using arrays!
 */
