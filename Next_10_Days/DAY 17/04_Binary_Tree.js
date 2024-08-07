class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  #root;
  constructor() {
    this.#root = null;
  }

  getRoot() {
    return this.#root;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.#root === null) {
      this.#root = newNode;
    } else {
      this.insertNode(this.#root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node) {
    if (node !== null) {        
      this.inorder(node.left);
      process.stdout.write(node.value + " ");
      this.inorder(node.right);
    }
  }
}

const t1 = new BinaryTree();

t1.insert(10);
t1.insert(4);
t1.insert(2);
t1.insert(5);
t1.insert(6);
t1.insert(1);
t1.insert(11);

const d = t1.getRoot();
console.log(d);

t1.inorder(d);
