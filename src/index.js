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

    // let tempIndex = newValues.length - 1;
    // let parentIndex = Math.floor((tempIndex - 1) / 2);

    // while (parentIndex >= 0 && newValues[tempIndex] > newValues[parentIndex]) {
    //   const parentValue = newValues[parentIndex];
    //   newValues[parentIndex] = newValues[tempIndex];
    //   newValues[tempIndex] = parentValue;

    //   tempIndex = parentIndex;
    //   parentIndex = Math.floor((tempIndex - 1) / 2);
    // }

    // eslint-disable-next-line no-return-assign
    return (this.values = this.bubbleUp(newValues, initialIndex));
    // return (this.values = newValues);
  }

  bubbleDown(values, index) {
    const firstIndex = index * 2 + 1;
    const secondIndex = index * 2 + 2;
    const newValues = [...values];

    if (!values[firstIndex] || firstIndex >= values.length) return newValues;

    const first = [firstIndex, newValues[firstIndex]];
    const second = [secondIndex, newValues[secondIndex]];
    let parentIndex = second[1] > first[1] ? second[0] : first[0];
    if (!newValues[secondIndex]) [parentIndex] = first;

    const parentValue = newValues[parentIndex];
    if (parentValue < newValues[index]) return newValues;

    newValues[parentIndex] = newValues[index];
    newValues[index] = parentValue;

    return this.bubbleDown(newValues, parentIndex);
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

    // let tempIndex = 0;
    // let firstIndex = tempIndex * 2 + 1;
    // let secondIndex = tempIndex * 2 + 2;

    // while (newValues[firstIndex] && firstIndex < newValues.length) {
    //   const first = [firstIndex, newValues[firstIndex]];
    //   const second = [secondIndex, newValues[secondIndex]];

    //   let parentIndex = first[1] > second[1] ? first[0] : second[0];
    //   if (!newValues[secondIndex]) {
    //     parentIndex = firstIndex;
    //   }

    //   const parentValue = newValues[parentIndex];
    //   if (parentValue < newValues[tempIndex]) break;

    //   newValues[parentIndex] = newValues[tempIndex];
    //   newValues[tempIndex] = parentValue;

    //   tempIndex = parentIndex;
    //   firstIndex = parentIndex * 2 + 1;
    //   secondIndex = parentIndex * 2 + 2;
    // }

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

// console.log(MBH.extractMax());
// console.log(MBH.values);
// console.log(MBH.extractMax());
// console.log(MBH.values);
// console.log(MBH.extractMax());
// console.log(MBH.values);
// console.log(MBH.extractMax());
// console.log(MBH.values);
// console.log(MBH.extractMax());
// console.log(MBH.values);
// console.log(MBH.extractMax());
// console.log(MBH.values);
console.log(MBH.extractMax());
console.log(MBH.values);
console.log(MBH.extractMax());
console.log(MBH.values);
console.log(MBH.extractMax());
console.log(MBH.values);
console.log(MBH.extractMax());
console.log(MBH.values);
console.log(MBH.extractMax());
console.log(MBH.values);
console.log(MBH.extractMax());
console.log(MBH.values);
