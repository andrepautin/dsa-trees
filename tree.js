/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toVisitStack = [this.root];
    let sumNodes = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        return 0;
      } 
      sumNodes += current.val;
      if (current.children.length > 0) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      } 
    }
    return sumNodes;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack = [this.root];
    let numEvens = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        return 0;
      }
      if (current.val % 2 === 0) {
        numEvens++;
      }
      if (current.children.length > 0) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitStack = [this.root];
    let numGreater = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        return 0;
      }
      if (current.val > lowerBound) {
        numGreater++;
      }
      if (current.children.length > 0) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }
    return numGreater;
  }
}

module.exports = { Tree, TreeNode };
