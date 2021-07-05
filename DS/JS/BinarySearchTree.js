class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (!node) {
      this.root = new Node(data);
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (!node.left) {
            node.left = new Node(data);
          } else {
            searchTree(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
          } else {
            searchTree(node.right);
          }
        }
      };
      searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (!current) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(item) {
    const removeNode = function (node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (!node.left && !node.right) {
          return null;
        }
        // node has no left child
        if (!node.left) {
          return node.right;
        }
        // node has no right child
        if (!node.right) {
          return node.left;
        }

        // node has two children
        // Find the successor node
        // Successor node = the node in the right subtree that has the minimum value
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, item);
  }
}

const bst = new BinarySearchTree();
bst.add(50);
bst.add(30);
bst.add(70);
bst.add(20);
bst.add(40);
bst.add(60);
bst.add(80);

console.log("root -------- ");
console.log(bst.root);
console.log("root -------- ");

bst.remove(20);

console.log(bst.findMin());
console.log(bst.findMax());

bst.remove(50);

console.log(bst.findMin());
console.log(bst.findMax());


console.log(bst.isPresent(20));
console.log(bst.isPresent(30));
console.log(bst.isPresent(70));
console.log(bst.find(70));

console.log("root -------- ");
console.log(bst.root);
console.log("root -------- ");
