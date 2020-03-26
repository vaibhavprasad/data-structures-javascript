class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor () {
		this.head = null;
	}
}

LinkedList.prototype.insertAtBegenning = function (data) {
	let newNode = new Node(data);
	newNode.next = this.head;
	this.head = newNode;
	return this.head;
}

LinkedList.prototype.insertAtEnd = function (data) {
	let newNode = new Node(data);
	let lastNode = this.head;
	while (lastNode.next !== null) {
		lastNode = lastNode.next;
	}
	lastNode.next = newNode;
}

LinkedList.prototype.displayAllNodes = function () {
	let currentNode = this.head;
	while (currentNode) {
		console.log(' ', currentNode.data, ' ');
		currentNode = currentNode.next;
	}
}

LinkedList.prototype.deleteFromBegenning = function () {
	let deleteNode = this.head;
	this.head = this.head.next;
    this.deleteNode = null;
}

LinkedList.prototype.deleteFromEnd = function () {
    let tempPtr = head;
    while(this.tempPtr.next) {
        tempPtr = tempPtr.next;
    }
}