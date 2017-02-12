// Print all paths in a tree - Facebook Question
// ex tree   1
//         2   3
//        4 5 6 7
// Print 1 2 4, 1 2 5, 1 3 6, 1 3 7

//Solution - http://www.geeksforgeeks.org/given-a-binary-tree-print-out-all-of-its-root-to-leaf-paths-one-per-line/
// array path with index is the key

var exp = require('./0_BST.js');
var bst = exp.fiz();

var printPaths = function(root, pathArray, pathLen) {
  if (!root) {
    return;
  }
  pathArray[pathLen]= root.data;
  pathLen++;
  if (!root.left && !root.right) {
    console.log(pathArray);
    //return;
  } else {
    printPaths(root.left, pathArray, pathLen);
    printPaths(root.right, pathArray, pathLen);
  }

}
var pathArray = [];
//printPaths(bst.root, pathArray, 0);
//console.log(pathArray);

var stack = [];
var printPaths1 = function(root) {
  if(!root) {
    return;
  }
  stack.push(root.data);
  if (!root.left && !root.right) {
    console.log(stack);
    stack.pop();
  }
  else {
    if (root.left) {
      printPaths1(root.left);
    }
    if (root.right) {
      printPaths1(root.right);
    }
  }
}

printPaths1(bst.root);
