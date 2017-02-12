var Node = function(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

//init
var BST = function() {
	this.root = null;
	this.length = 0;
}

BST.prototype.add = function(data) {
	var node = new Node(data);
	if (this.root === null) {
		this.root = node;
		this.length++;
		return;
	}

	var currentNode = this.root;

	while(currentNode) {
		if(data < currentNode.data) {
			if (!currentNode.left) {
             	currentNode.left = node;
             	break;
          	}
          	else {
            	currentNode = currentNode.left;
        	}
		}
		else if (data > currentNode.data) {
			if (!currentNode.right) {
				currentNode.right = node;
				break;
			}
			else {
				currentNode = currentNode.right;
			}
		}

	}
	this.length++;
}

// prints the root first, then left side and then right side
var preOrderTraversal = function(root) {
	console.log(root.data);
	if(root.left) {
		preOrderTraversal(root.left);
	}
	if (root.right) {
		preOrderTraversal(root.right);
	}
}

// prints left node first, then root, then right side
var nodeList = [];

var inOrderTraversal = function(root) {
	if (root.left) {
		inOrderTraversal(root.left);
	}
	//console.log(root.data);
	nodeList.push(root.data);
	if (root.right) {
		inOrderTraversal(root.right);
	}
	//return nodeList;
}

// prints the left side and then right side
var postOrderTraversal = function(root) {

	if (root.left) {
		postOrderTraversal(root.left);
	}

	if(root.right) {
		postOrderTraversal(root.right);
	}

	console.log(root.data);
}

var breadthFirstTraversal = function(root) {
	if (!root) {
		return;
	}
	var q = [];
	q.push(root);
	console.log(q);
	//console.log(root);

	while(q) {
		var node = q.shift();
		if (node) {
			console.log(node.data);


		if (node.left) {
			q.push(node.left);
		}
		if (node.right) {
			q.push(node.right);
		}
	}

	}
}

var bsTree = new BST();
// bsTree.add(4);
// bsTree.add(2);
// bsTree.add(1);
// bsTree.add(9);
bsTree.add(10);
bsTree.add(5);
bsTree.add(20);
bsTree.add(1);
bsTree.add(6);
bsTree.add(15);
bsTree.add(35);
bsTree.add(33);
bsTree.add(42);

var bsTree1 = new BST();
bsTree1.add(5);
bsTree1.add(3);
bsTree1.add(8);
bsTree1.add(7);


/*bsTree.add(10);
bsTree.add(32);
bsTree.add(60);
bsTree.add(85);*/

//console.log(bsTree.root);
//console.log(bsTree.length);

/*preOrderTraversal(bsTree.root);
console.log('************');
inOrderTraversal(bsTree.root);
console.log('************');*/

//postOrderTraversal(bsTree.root);

//breadthFirstTraversal(bsTree.root);

exports.inOrderList = function(root) {
	nodeList = [];
	inOrderTraversal(root);
	return nodeList;
}
exports.postOrder = function(root) {
	return postOrderTraversal(root);
};
exports.fiz = function() {
	//console.log('exports');
	return bsTree;
	//return [bsTree, bsTree1];
}
