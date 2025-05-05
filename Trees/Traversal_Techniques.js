/*
Refer: Trees_introduction image file
Depth First Search 

-- can be done recursive (using pre, post, inorder traversal techniques)
-- can be done iterative (using stack)

Breadth First Search

-- can be done iterative (using queue) (BFS also called as Level order traversal)

Important notes:
-- Inorder traversal gives result in sorted order
*/
//-------------------------------------------------------------------------------------------
// DFS - Iterative way using stack
function DFSIterative(head) {
  if (!head) {
    return [];
  }
  const stack = [head];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
}

// DFS - Recursive way using Pre-order traversal (Top to Bottom)
function DFSRecursive(head) {
  const numbers = [];
  function traverse(node) {
    if (node === null) {
      return;
    }
    numbers.push(node.val);       // If this statement is line 1, then pre-order, if line 2 , then in-order, if line 3 then post-order traversal
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(head);
  return numbers;
}
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
// BFS - Iterative way using queue
function BFSRecursive(head) {
  if (!head) {
    return [];
  }
  const queue = [head];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
}
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
