// Write a function to traverse a Binary Tree	PostOrder, without using recursion. As you travel please print content of the nodes.
// solution - https://www.youtube.com/watch?v=hv-mJUs5mvU

/*
1) Use 2 stacks, stackIn, stackOut
2) push the root to the stackIn
3) while the stackIn is not empty (length > 0)
4) pop stackIn and push to stackOut
5) check for left and right and push to stackIn
6) run a while loop to print data
*/

var exp = require('./0_BST.js');
var bst = exp.fiz();

//console.log('bst', bst);
//console.log(exp.postOrder(bst.root));

var postOrderItr = function(root) {
  var stackIn = [],
      stackOut = [];

  if(!root) {
    return;
  }
  stackIn.push(root);
  while(stackIn.length > 0) {
    var current = stackIn.pop();
    stackOut.push(current);
    if (current.left) {
      stackIn.push(current.left);
    }
    if (current.right) {
      stackIn.push(current.right);
    }
  }

  while(stackOut.length > 0) {
     console.log('stackOut - ', stackOut.pop().data);
  }
}

postOrderItr(bst.root);
