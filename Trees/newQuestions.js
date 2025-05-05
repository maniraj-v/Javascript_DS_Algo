// Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// Logic --> if p,q lies left/right side, recurse it  else node will be LCA
var lowestCommonAncestor = function (root, p, q) {
    if (!root || !p || !q) {
        return null;
    }
    if (Math.max(p.val, q.val) < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (Math.min(p.val, q.val) > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};
