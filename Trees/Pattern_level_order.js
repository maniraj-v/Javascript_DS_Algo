//-------------------------------------------------------------------------------------------
/* Level order traversal (print as per levels)
    Input: root = [1,2,3,4,5,6,7]
    Output: [[1],[2,3],[4,5,6,7]]
*/
function levelOrder(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = [root];
  let currentLevel = 0;
  while (queue.length > 0) {
    let stackLen = queue.length;
    while (stackLen > 0) {
      const node = queue.shift();
      if (result[currentLevel]) {
        result[currentLevel].push(node.val);
      } else {
        result[currentLevel] = [node.val];
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      stackLen--;
    }
    currentLevel++;
  }
  return result;
}
//-------------------------------------------------------------------------------------------
/* Print Right side of Tree 
    Input: root = [1,2,3,4,5,6,7]
    Output: [1,3,7]
Hint: [use level order traversal and take last element of level]
Other solution : 
 Using stack, for each depth, result[depth] = node.val 
 first write left, will eventually be overwritten by right if present
 https://leetcode.com/problems/binary-tree-right-side-view/solutions/549960/javascript-52ms-dfs
*/

function rightSideView(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = [root];
  while (queue.length > 0) {
    let stackLen = queue.length;
    while (stackLen > 0) {
      const node = queue.shift();
      if (stackLen === 1) {
        result.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      stackLen--;
    }
  }
  return result;
}
//-------------------------------------------------------------------------------------------
