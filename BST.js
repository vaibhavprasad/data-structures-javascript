// BST implementation
// All operations are recursive. Iterative version will be implemented once basics are covered
// operations - insert, delete, search, traversal (in-order, pre-order and post-order though only in-order makes sense)
// { Author: Vaibhav Prasad }
class Node {
    constructor (data) {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
        this.size = 0;
    }
}

BinarySearchTree.prototype.insert = function (data) {
    let node = new Node(data);
    this.root = this.insertHelper(this.root, node);
    this.size++;
}

BinarySearchTree.prototype.insertHelper = function (root, node) {
    if (!root) {
        return node;
    } else if (node.data > root.data) {
        root.right = this.insertHelper(root.right, node)
    } else if (node.data < root.data) {
        root.left = this.insertHelper(root.left, node);
    }
    return root;
}

BinarySearchTree.prototype.delete = function (data) {
    if (this.search(data)) {
        this.deleteHelper(this.root, data);
        this.size--;
        return this.size;
    } else {
        console.log('Item not present in the tree');
    }
    
}

BinarySearchTree.prototype.deleteHelper = function (root, data) {
    if (root.data === data) {
        if (!root.left && !root.right) {
            root = null;
        } else if (!root.left) {
            root = root.right;
        } else if (!root.right) {
            root = root.left;
        } else {
            let inorderSuccessor = this.inorderSuccessor(root.right);
            root.data = inorderSuccessor;
            this.deleteHelper(root.right, inorderSuccessor);
        }
        return root;
    } else if (root.data > data) {
        root.left = this.deleteHelper(root.left, data);
    } else {
        root.right = this.deleteHelper(root.right, data);
    }
    return root;
}

BinarySearchTree.prototype.search = function (data) {
    return this.searchHelper(this.root, data);
}

BinarySearchTree.prototype.searchHelper = function (root, data) {
    if (root === null) {
        return false;
    } else if (root.data === data) {
        return true;
    } else if (root.data > data) {
        return this.searchHelper(root.left, data);
    } else {
        return this.searchHelper(root.right, data);
    }
}

BinarySearchTree.prototype.traverse = function () {
    this.inorderTraversal(this.root);
}

BinarySearchTree.prototype.inorderTraversal = function (root) {
    if (root === null) {
        return;
    }
    this.inorderTraversal(root.left);
    console.log(root.data);
    this.inorderTraversal(root.right);
    return;
}

BinarySearchTree.prototype.preOrderTraversal = function (root) {
    if (root === null) {
        return;
    }
    console.log(root.data);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
    return;
}

BinarySearchTree.prototype.postOrderTraversal = function (root) {
    if (root === null) {
        return;
    }
    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.data);
    return;
}

BinarySearchTree.prototype.inorderSuccessor = function (root) {
    if (root.left === null) {
        return root.data;
    }
    return this.inorderSuccessor(root.left);
}

let bst = new BinarySearchTree();

bst.insert(50);
bst.insert(70);
bst.insert(30);
bst.insert(20);
bst.insert(10);
bst.insert(25);
bst.insert(40);
bst.insert(35);
bst.insert(45);
bst.insert(90);
bst.insert(80);
bst.insert(150);
bst.insert(200);

bst.delete(30);

// bst.insert('dharmendra');
// bst.insert('pankaj');
// bst.insert('nilesh');
// bst.insert('vaibhav');
// bst.insert('suryanshu');
// bst.insert('sneh');
// bst.insert('richa');
// bst.insert('kalyani');
// bst.insert('neha');
// bst.insert('ashish');
// bst.insert('kavita');
// bst.insert('sohan');
// bst.insert('mohan');
// bst.insert('pintu');
// bst.insert('chintu');
// bst.insert('sita');
// bst.insert('rita');
// bst.insert('geeta');
// bst.insert('babita');
