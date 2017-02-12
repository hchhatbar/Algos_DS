/* Google Question
Write a recursive function treeToList(Node root) that takes a BST and re-arranges the internal pointers to make a
circular doubly linked list out of the tree nodes. The "previous" pointers should be stored in the "Right" field. The list
should be arranged so that the nodes are in increasing order. Return the head pointer to the new list. The operation can be
done in O(n) time.

RIGHT --> NEXT
LEFT --> PREVIOUS

Solution - http://articles.leetcode.com/convert-binary-search-tree-bst-to/

Approach -->
1) Recurse all the way down to left subtree's leaf node
2) Recursive function should accept 3 params --> root, previous, head
3) if previous node exists then assign previous.RIGHT = root
4) ELSE head = ROOT --> last element (lowest) in left sub tree
5) store ptr to ROOT.right in TEMPRIGHT
6) make HEAD.LEFT = ROOT
7) make ROOT.RIGHT = head
8) Recurse on right subtree
*/

var treeToList = function(root, prev, head) {
  if (!root) {
    return;
  }
  treeToList(root.left, prev, head);

  if (prev) {
    prev.right = root;
  } else {
    head = root; // base case for lowest leaf node, "node with val 1" will be assigned to head
  }

  var tempRight = root.right;
  head.left = root;
  root.right = head;

  // update the previous node
  prev = root;
  treeToList(tempRight, prev, head);
}
