// ------------------------------------------------------------------------------------------
// Important Pattern: Bottom up approach since path may not pass thru root
//-------------------------------------------------------------------------------------------
// Diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  if (!root) return diameter;
  function traverse(root) {
    if (!root) return 0;
    const left = traverse(root.left);
    const right = traverse(root.right);
    diameter = Math.max(diameter, left + right);
    // console.log({right, left, diameter})
    return 1 + Math.max(left, right);
  }
  traverse(root);
  return diameter;
};
//-------------------------------------------------------------------------------------------
function checkIsBalanced(root) {
  if (root === null) return true;
  let isBalanced = true;
  function traverse(node) {
    if (node === null) {
      return 0;
    }
    const left = traverse(node.left);
    // optimised to return early if left tree itself unbalanced
    if (isBalanced === false) {
      return;
    }
    const right = traverse(node.right);
    if (isBalanced) {
      isBalanced = Math.abs(left - right) <= 1;
    }
    return 1 + Math.max(left, right);
  }
  traverse(root);
  return isBalanced;
}
//-------------------------------------------------------------------------------------------

