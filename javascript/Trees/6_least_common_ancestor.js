/*
48min in video
Popular interview problem

Let T be a rooted tree. The lowest common ancestor between two nodes n1 and n2 is defined as the lowest node in T that has
both n1 and n2 as descendants.

The LCA of n1 and n2 in T is the shared ancestor of n1 and n2 that is located farthest from the root. Computation of lowest
common ancenstors may be useful, for instance, as part of a procedure for determining the distance between pair of nodes
in a tree: the distance from n1 to n2 can be computed as the distance from the root to n1, plus the distance from the root to
n2, minus twice the distance from the root to their lowest common ancestor (Soure Wikipedia)

Design and write an algorithm to find the LCA node, given 2 nodes in a Binary tree
- Tree may or may not be a BST
- Assume a node structure that has NO parent pointer
- Assume that the two nodes are distinct and exist in the tree
- Find a solution that has runtime complexity of O(n), n is the # of nodes in the tree
- Desired solution in O(n) time

Solution - http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/

given the following tree
FindLCA(10,20) = 15
FindLCA(50,80) = 65
FindLCA(20,60) = 45
                                45
                        25              65
                     15    30       55      75
                  10   20        50   60       80

1) In Order - all elements left of root are left subtree
2) Post Order - root is at the end, left comes first and then right subtree
3) Do an In Order traversal and Post Order traversal, create 2 arrays
4) FROM INORDER ARRAY - Pick all elements between the two nodes for LCA
5) FROM POST ORDER ARRAY - find the element with the highest index (last element) - LCA

Method 1 - store the paths and compare. needs extra traversal and memory. Complexity - O(n)
Method 2 - Single traversal
*/

var exp = require('./0_BST.js');
var bst = exp.fiz();

var findLCA = function(root, n1, n2) {
  // base case
  if (!root) {
    return null;
  }

  // if n1 or n2 matches with root
  if ((root.data === n1) || (root.data === n2)) {
    return root;
  }

  // look for keys in the left and right sub trees
  var left = findLCA(root.left, n1, n2);
  var right = findLCA(root.right, n1, n2);

  // If both of the above calls return Non-NULL, then one key is present in one subtree
  // and other is present in other, So this node is the LCA
  if (left && right) {
    return root;
  }

  // Otherwise check if left subtree or right subtree is LCA
  if (left) {
    return left;
  } else {
    return right;
  }

}

var lca = findLCA(bst.root, 15, 33);
console.log('lca - ', lca.data);


// for BST - above solution works for both Binary Tree and BST
// this solution will only work on BSTs
// Complexity - O(h) --> height of the tree

var bstLCA = function(root, n1, n2) {
  if (!root) {
    return;
  }
  if (maxN1N2(root, n1, n2)) {
    return bstLCA(root.left, n1, n2);
  }
  if (minN1N2(root, n1, n2)) {
    return bstLCA(root.right, n1, n2);
  }

    return root;

};

var maxN1N2 = function(root, n1, n2) {
  if (root.data > n1 && root.data > n2) {
    return true;
  }
  return false;
};

var minN1N2 = function(root, n1, n2) {
  if (root.data < n1 && root.data < n2) {
    return true;
  }
  return false;
};
console.log('bstLCA - ', bstLCA(bst.root, 15, 33).data);
