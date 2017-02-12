/*Given a Binary Tree --> check if its a BST?  A valid BST doesn't have to be complete or balanced. 
  Duplicate elements are not allowed in the BST.

  Binary Search Tree Properties
 1) left node less than the parent (root) node
 2) right node greater than the parent (root) node
 3) No duplicates

 */
//var exp = require('./0_BST.js');

//exp.fiz();


var isBST = function(root) {
	return checkBST(root, Math.min(), Math.max());
}

var checkBST = function(root, min, max) {

	if (!root) {
		return true;
	}

	if (root.data > min && root.data < max ) {
		return checkBST(root.left, min, root.data) && checkBST(root.right, root.data, max);
	}

	return false;
}