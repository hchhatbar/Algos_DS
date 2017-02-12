/*
Merge 2 BSTs in O(N1 + N2) --> N1, N2 number of nodes --> merged BST should be balanced and should contain
all elements
Print the tree level by level

*/

// create BST from sorter array - ex [1,2,3,4,5,6,7,8,9]

var exp = require('./0_BST.js');

var t1 = exp.fiz();
//console.log(t1[1]);

var sortedList1 = exp.inOrderList(t1[0].root);
console.log(sortedList1);

var sortedList2 = exp.inOrderList(t1[1].root);
console.log(sortedList2);

//Merge two lists by using merge sort 
// for now use js sort

var sortedList = sortedList1.concat(sortedList2).sort(function(a,b) {
	if(a > b) {
		return 1;
	} else if (a < b) {
		return -1;
	} else return 0;

});

// BST creation logic
//
var Node = function(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}



var listToBST = function(list) {
	if (list.length < 2) {
		return new Node(list[0]); // explain yourself later
	};

	var index = Math.floor(list.length / 2);
	var root = new Node(list[index]);
	
	//console.log(list.slice(index + 1,list.length));

	root.right = listToBST(list.slice(index + 1,list.length));
	root.left = listToBST(list.slice(0, index));
	
	return root;
}

console.log(listToBST(sortedList));

exp.postOrder(listToBST(sortedList));

var iterativePostOrder = function(root) {
	while (!root) {
		
	}
}


