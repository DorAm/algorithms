/**
 * Same Tree
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Time: O(n)
 * Space:
 * O(log n) - in the best case of completely balanced tree
 * O(n) - in the worst case of completely unbalanced tree
 *
 **/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function SameTree(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return SameTree(p.left, q.left) && SameTree(p.right, q.right);
}

let p = new TreeNode(1, new TreeNode(2, null, null), null);
let q = new TreeNode(1, null, new TreeNode(2, null, null));
SameTree(p, q);
