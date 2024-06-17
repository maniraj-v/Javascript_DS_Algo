//-------------------------------------------------------------------------------------------
// Invert tree - DFS recursive approach
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Invert tree - DFS iterative approach
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node != null) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left, node.right);
    }
  }

  return root;
}
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
// Get maximum depth of tree (It could be on left/side of tree)
function getMaxDepth(root) {
  let maxDepth = 0;
  function traverse(node, level) {
    if (node === null) {
      return;
    }
    maxDepth = Math.max(maxDepth, level);
    node.left && traverse(node.left, level + 1);
    node.right && traverse(node.right, level + 1);
  }
  traverse(root, 1);
  return maxDepth;
}
