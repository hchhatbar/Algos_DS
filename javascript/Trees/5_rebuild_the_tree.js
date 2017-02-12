// Rebuild the tree
/*
given the in-order and pre-order traversing results of a binary tree(as arrays), write a function to rebuild the tree.
The function should return the pointer to the root node of the tree. Then take that pointer and print your tree
level by level(level order)

Ex - In Order - 15, 30, 35, 40, 45, 50, 60, 70, 72, 75, 77, 80
   - Pre Order - 50, 30, 15, 40, 35, 45, 70, 60, 80, 75, 72, 77

Trivia - Generally speaking, one needs to be given in-order traversal (with either pre or post or level) as input, in order to
re-construct a binary tree. Without in-order traversal given, its not possible to re-construct a binary tree without ambiguity,
even if all other 3 traversal orders are given. The only exception, is if we know something more about the tree, ex - if
binary tree is full and complete, then we can resolve the ambiguity without having to know the in-order traversal
Something to read - http://www.geeksforgeeks.org/if-you-are-given-two-traversal-sequences-can-you-construct-the-binary-tree/

Solution:
- http://articles.leetcode.com/construct-binary-tree-from-inorder-and-preorder-postorder-traversal
- http://edwardliwashu.blogspot.in/2013/01/construct-binary-tree-from-preorder-and.html
- https://www.youtube.com/watch?v=PAYG5WEC1Gs

1) Pre Order - 1st element is root
2) In Order - 1st element is the left most 
*/
