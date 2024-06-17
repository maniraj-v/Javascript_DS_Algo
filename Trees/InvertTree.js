// Add your code here

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertTree(root) {
  if (root === null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

// Pre-order traversal (Top to Bottom)
function printTree(tree) {
  const numbers = [];
  function traverse(node) {
    if (node === null) {
      return;
    }
    numbers.push(node.val);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(tree);
  return numbers;
}

const tree = new Node(20);
tree.left = new Node(11);
tree.left.left = new Node(10);
tree.left.right = new Node(15);
tree.right = new Node(30);
tree.right.left = new Node(25);
tree.right.right = new Node(40);

console.log({ tree: printTree(tree) });
console.log({ invertedTree: printTree(invertTree(tree)) });
