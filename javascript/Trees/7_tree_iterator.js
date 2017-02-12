/*
Implement an iterator over a BST. Your iterator will be initialized with the root node of a BST.

1. Calling next() will return the next smallest number in BST
2. Calling hasNext() should return whether next element exists

Both functions should run in average O(1) time and uses O(h) memory, where h is the height of the tree

Solutions
 - with parent pointer http://stackoverflow.com/questions/12850889/in-order-iterator-for-binary-tree
 - With Stack (no parent pointer) https://discuss.leetcode.com/topic/6575/my-solutions-in-3-languages-with-stack

With stack is generally preferred (no parent pointer)
*/

var exp = require('./0_BST.js');
var bst = exp.fiz();
var stack = [];

var iterator = function(root) {
  if (!root) {
    return;
  }
  while (root) {
    stack.push(root);
    root = root.left;
  }
}

var hasNext = function() {
  return (stack.length > 0) ? true : false;
}

var next = function() {
  var tempNode = stack.pop();
  console.log(tempNode.data);
  if (tempNode.right) {
    iterator(tempNode.right);
  }
  // return tempNode.data
}

// initialization
iterator(bst.root);
console.log(hasNext());
next();
next();
next();
next();
next();
next();
next();
next();
next();
console.log(hasNext());
