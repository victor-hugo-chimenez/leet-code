class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
 
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const deletedNodes = new Set(to_delete);
    const remainingForest = new Array();

    function traverse(node, isRoot) {
        if (!node) {
            return null;
        }

        const shouldNodeBeDeleted = deletedNodes.has(node.val);
        if (isRoot && !shouldNodeBeDeleted) {
            remainingForest.push(node);
        }

        node.left = traverse(node.left, shouldNodeBeDeleted);
        node.right = traverse(node.right, shouldNodeBeDeleted);

        return isNodeDeleted ? null : node;
    }

    traverse(root, true);
    return remainingForest;
    
};
