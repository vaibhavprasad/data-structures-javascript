// implementing BFS on a BST using queue in both inerative and recursive ways
// Applications of BFS - cheney's algorithm (garbage collection), shoterst path b/w two nodes, with path length measured by #edges, testing graph for bipartiteness,
// minimum spanning tree for unweighted graph, web crawler, finding nodes in any connected component of a graph, ford-fulkerson algo for max flow, etc
// {Author: Vaibhav Prasad}


// node of a queue
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
}

Queue.prototype.enqueue = function (data) {
//     return size of the Queue
    let node = new Node(data);
    if (this.head === null) {
        this.head = node;
    } else {
        this.tail.next = node;
    }
    this.tail = node;
    this.size++;
    return this.size;
}

Queue.prototype.dequeue = function () {
//     return the dequeued element
    if (this.head === null) {
        return null;
    } else {
        let tmpNode = this.head;
        this.head = this.head.next;
        let dequeuedData = tmpNode.data;
        this.size--;
        tmpNode = null;
        return dequeuedData;
    }
}

// Node of a BST
class NodeBST {
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
    let node = new NodeBST(data);
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

// iterative BFS
BinarySearchTree.prototype.bfsIterative = function () {
    if (!this.root) {
        return null;
    }
    let q = new Queue();
    q.enqueue(this.root);
    while(q.size !== 0) {
        let el = q.dequeue();
        console.log(el.data);
        if (el.left) q.enqueue(el.left);
        if (el.right) q.enqueue(el.right);
    }
}

BinarySearchTree.prototype.bfsRecursive = function () {
    if (!this.root) {
        return null;
    }
    let q = new Queue();
    q.enqueue(this.root);
    this.bfsHelper(q);
}

BinarySearchTree.prototype.bfsHelper = function (q) {
    if (q.size === 0) {
        return;
    } else {
        let el  = q.dequeue();
        console.log(el.data);
        if (el.left) q.enqueue(el.left);
        if (el.right) q.enqueue(el.right);
        return this.bfsHelper(q);
    }
}

// Create a tree and insert Data
//                  70
//             50        90                
//         30     60  80    100
// 
let bst = new BinarySearchTree();
bst.insert(70);
bst.insert(50);
bst.insert(30);
bst.insert(60);
bst.insert(90);
bst.insert(80);
bst.insert(100);

// BFS traversal
bst.bfsIterative();  // 70 50 90 30 60 80 100
bst.bfsRecursive();  // 70 50 90 30 60 80 100

