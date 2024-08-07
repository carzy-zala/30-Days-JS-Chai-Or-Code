class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function inorderTraversal(root) {
  if (!root) return;
  inorderTraversal(root.left);
  process.stdout.write(root.data + " ");
  inorderTraversal(root.right);
}

const tree = new Tree(
  1,
  new Tree(2, new Tree(3), new Tree(4)),
  new Tree(5, new Tree(6, new Tree(7, new Tree(8, new Tree(9)))))
);

/*
          1
        2      5
       3  4  6
            7
           8 
*/
process.stdout.write("INORDER : ")
inorderTraversal(tree);
console.log();

// Task 10
function calculateDepth(root) {
  if (!root) return 0;
  let right = calculateDepth(root.right);
  let left = calculateDepth(root.left);

  return Math.max(right, left) + 1;
}

console.log("Depth is : ", calculateDepth(tree));
