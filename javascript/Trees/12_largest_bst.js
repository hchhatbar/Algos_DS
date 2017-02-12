/*
Given a binary tree, find the largest Binary Search Tree (BST), where largest means BST with largest number of nodes in it.
The largest BST must include all of its descendants.

Solution - http://www.ideserve.co.in/learn/size-of-largest-bst-in-binary-tree

 - Recurse left
 - Recurse right
 - leaf nodes are bst by definition
 - return min, max, size
*/


// init
var MinMax = function () {
  this.isBST = true;
  this.size = 0;
  this.min = Math.max();
  this.max = Math.min();
}

var largestBST = function(root) {
  var m = largest(root);
  return m.size;
}

var largest = function(root) {
  if (!root) {
    return new MinMax();
  }
  var left = largest(root.left);
  var right = largest(root.right);

  var m = new MinMax();
  // condition where left or right are not bst
  if (!left.isBST || !right.isBST || (left.max > root.data) || (right.min <= root.data)) {
    m.isBST = false;
    m.size = Math.max(left.size, right.size);
    return m;
  }
  // otherwise both are bst
  m.isBST = true;
  m.size = left.size + right.size + 1;
  m.min = (!root.left) ? left.min : root.data;
  m.max = (!root.right) ? right.max : root.data;

  return m;
}
