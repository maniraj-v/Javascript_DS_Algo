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
  if (root === null) {
    return maxDepth;
  }
  function traverse(node, level) {
    // Check for maximum when loop reaches leaf node
    if (node.left === null && node.right === null) {
      maxDepth = Math.max(maxDepth, level);
      return;
    }
    node.left && traverse(node.left, level + 1);
    node.right && traverse(node.right, level + 1);
  }
  traverse(root, 1);
  return maxDepth;
}
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
// Is Same Tree
function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
// Is Sub Tree using Is Same Tree
function isSubtree(root, subRoot) {
  if (root === null) {
    return false;
  }
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

//-------------------------------------------------------------------------------------------
// Merge trees
function mergeTrees(root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  root1.val = root1.val + root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
}
//-------------------------------------------------------------------------------------------
// Check if Root --> Leaf Path Sum match with targetSum
function hasPathSum(root, targetSum) {
  let hasPathFound = false;
  if (root === null) {
    return hasPathFound;
  }
  function traverse(node, pathSum) {
    // Leaf node where left and right are null
    if (node.left === null && node.right === null) {
      hasPathFound = pathSum === targetSum;
    }
    hasPathFound === false &&
      node.left &&
      traverse(node.left, pathSum + node.left.val);
    hasPathFound === false &&
      node.right &&
      traverse(node.right, pathSum + node.right.val);
  }
  traverse(root, root.val);
  return hasPathFound;
}
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
/* Count good nodes in tree 
  Node x is considered good if the path from the root of the tree to the node x contains no nodes 
  with a value greater than the value of node x
  Hint: In the path, if node value is greater than pathMax, add to result
*/
function goodNodes(root) {
  let count = 0;
  if (root === null) {
    return count;
  }
  function traverse(node, pathMax) {
    if (node.val >= pathMax) {
      pathMax = node.val;
      count++;
    }
    node.left && traverse(node.left, pathMax);
    node.right && traverse(node.right, pathMax);
  }
  traverse(root, -Infinity);
  return count;
}
//-------------------------------------------------------------------------------------------
// Validate whethere BST is correct or not
// Refer: image for clear picture of min,max flow to depth of tree
var isValidBST = function (root) {
  function traverse(node, min, max) {
    if (node === null) {
      return true;
    }
    if (node.val >= max) {
      return false;
    }
    if (node.val <= min) {
      return false;
    }
    return (
      traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
    );
  }
  return traverse(root, -Infinity, Infinity);
};
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
