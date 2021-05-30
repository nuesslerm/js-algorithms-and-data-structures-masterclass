/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */
/**
 * trees
 * data structure that consists of nodes in a parent / child relationship
 * lists - linear
 * trees - nonlinear
 * singly-linked list - special case of a tree
 * nodes in trees can only point to children, not to parent or sibling nodes
 * there is only one root node in a tree
 *
 * * root: top node in a tree
 * * child: node directly connected to another node when moving away from the root
 * * parent: node directly connected to another node when moving towards the root
 * * siblings: a group of nodes with the same parent
 * * leaf: a node with no children
 * * edge: connection between one node and another node
 */

/**
 * uses for trees
 * * HTML DOM (document object model)
 * * network routing
 * * abstract syntax tree
 * * artificial intelligence
 *   * min-max tree
 *   * decision tree
 * * folder tree in an operating system
 * * JSON structure
 */

/**
 * kinds of trees
 * * binary tree -> tree where each parent node has at most two children nodes
 * * binary search tree -> binary tree where ...
 *   * every node to the left of a parent is always less than the parent
 *   * every node to the right of a parent is always greater than the parent
 * * heaps
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

  insert2(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (newNode.value === current.value) return this;

      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }

      if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  insertRecursive(value, current = this.root) {
    // if (!this.root) {
    //   this.root = new Node(value);
    //   return this;
    // }
    // if (current.value === value) return this;
    if (!this.root) {
      this.root ||= new Node(value);
      return this;
    }

    if (value < current.value) {
      if (current.left) return this.insertRecursive(value, current.left);
      current.left = new Node(value);
    }

    if (value > current.value) {
      if (current.right) return this.insertRecursive(value, current.right);
      current.right = new Node(value);
    }

    return this;
  }

  insertRecursive2(value) {
    const newNode = new Node(value);

    const insertHelp = (node) => {
      // newNode.value === value, but we use newNode.value to safe-guard against changes to the Node constructor
      if (newNode.value < node.value) {
        return insertHelp((node.left ||= newNode));
      }
      if (newNode.value > node.value) {
        return insertHelp((node.right ||= newNode));
      }

      return this;
    };

    return insertHelp((this.root ||= newNode));
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

  find2(value) {
    if (!this.root) return undefined;

    let current = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value === current.value) return current;

      if (value < current.value) {
        if (!current.left) return undefined;
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) return undefined;
        current = current.right;
      }
    }
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

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(8);
tree.insert(2);
tree.insert(1);
tree.insert(11);
// tree.insert(3);
// console.log('tree: ', tree.insert(3).toString());

console.log(tree.find(2));
console.log(tree.find(8));
console.log(tree.find(4));
console.log(tree.find(44));
console.log(tree.find(3));
console.log(tree.find(3));
console.log('------');
console.log(tree.find2(2));
console.log(tree.find2(6));
console.log(tree.find2(1));
console.log(tree.find2(11));
console.log(tree.find2(3));
console.log(tree.find2(5));
console.log('------');
console.log(tree.contains(2));
console.log(tree.contains(8));
console.log(tree.contains(1));
console.log(tree.contains(11));
console.log(tree.contains(3));
console.log(tree.contains(5));

// const tree2 = new BinarySearchTree();
// tree2.insert2(5);
// tree2.insert2(6);
// tree2.insert2(4);
// tree2.insert2(8);
// tree2.insert2(2);
// tree2.insert2(1);
// tree2.insert2(1);
// console.log('tree2: ', tree2.insert2(3).toString());

// const tree3 = new BinarySearchTree();
// tree3.insertRecursive(5);
// tree3.insertRecursive(6);
// tree3.insertRecursive(4);
// tree3.insertRecursive(8);
// tree3.insertRecursive(2);
// tree3.insertRecursive(1);
// tree3.insertRecursive(1);
// console.log('tree3: ', tree3.insertRecursive(3).toString());

// const tree4 = new BinarySearchTree();
// tree4.insertRecursive2(5);
// tree4.insertRecursive2(6);
// tree4.insertRecursive2(4);
// tree4.insertRecursive2(8);
// tree4.insertRecursive2(2);
// tree4.insertRecursive2(1);
// tree4.insertRecursive2(1);
// console.log('tree4: ', tree4.insertRecursive2(3).toString());

/**
 * Big-O of BST
 * insertion - O(log n) <- best and average case; not guaranteed (e.g. if you use BST like a linked list)!
 * searching - O(log n) <- best and average case; not guaranteed (e.g. if you use BST like a linked list)!
 * reason for log n complexity:
 *   when you double the number of nodes in the tree by adding another full layer at the bottom,
 *   it will only increase the number of steps needed to insert/find a node by 1 more step
 */
