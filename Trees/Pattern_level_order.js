//-------------------------------------------------------------------------------------------
/* Level order traversal (print as per levels)
    Input: root = [1,2,3,4,5,6,7]
    Output: [[1],[2,3],[4,5,6,7]]
*/

// Method #1 - easy to understand

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    const numbers = []
    const queue = [root]
    let temp = []
    while (queue.length > 0) {
        const queueSize = queue.length
        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        numbers.push(temp)
        temp = []
    }
    return numbers
};

// Method 2

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

var rightSideView = function(root) {
    if(!root){
        return []
    }
    const numbers = []
    const queue = [root]
    let temp = []
    while(queue.length >0){
        const queueSize = queue.length
        for(let i=0;i<queueSize;i++){
            const node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        numbers.push(temp[temp.length - 1]) // take the last element in the level which could be right or left (incase of no right)
        temp = []
    }
    return numbers
};
//-------------------------------------------------------------------------------------------
