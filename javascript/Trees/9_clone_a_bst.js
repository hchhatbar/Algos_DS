/*
Given a Binary Tree (represented by its root node, like usual), clone it. Return the root node of the cloned tree.

Solution - http://crackprogramming.blogspot.in/2012/11/make-copy-of-binary-tree-given-pointer.html

Remember: Cloning or copying is best done recursively. Notice how clean and succinct the code is. Some of you may be tempted
to do it breadth-first. But thats more complicated to handle in implementation.
*/

var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var cloneTree = function(root) {
  if (!root) {
    return null;
  }

  var copyNode = new Node(root.data);
  copyNode.left = cloneTree(root.left);
  copyNode.right = cloneTree(root.right);

  return copyNode;
}
