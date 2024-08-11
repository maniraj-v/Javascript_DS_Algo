// inorder traversal - iterative way
// Solve many questions iterative way using inorder
// https://leetcode.com/problems/validate-binary-search-tree/solutions/32112/learn-one-iterative-inorder-traversal-apply-it-to-multiple-tree-questions-java-solution
var inorderTraversal = function (root) {
  // Initialize an empty array to store the result (in-order traversal)
  const res = [];

  // Initialize an empty stack for iterative traversal
  const stack = [];

  // Loop until either the current node is not null or the stack is not empty
  while (root || stack.length > 0) {
    // Traverse to the leftmost node and push each encountered node onto the stack
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // Pop the last node from the stack (most recently left-visited node)
    root = stack.pop();

    // Append the value of the popped node to the result array
    res.push(root.val);

    // Move to the right subtree to continue the in-order traversal
    root = root.right;
  }

  // Return the final result array
  return res;
};
