// Datastructure definition

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor () {
		this.head = null;
		this.size = 0;
	}
}

LinkedList.prototype.displayAllNodes = function () {
	let currentNode = this.head;
	while (currentNode) {
		console.log(' ', currentNode.data, ' ');
		currentNode = currentNode.next;
	}
}

LinkedList.prototype.insertAtBegenning = function (data) {
	let newNode = new Node(data);
	newNode.next = this.head;
	this.head = newNode;
	this.size++;
}

LinkedList.prototype.insertAtEnd = function (data) {
	let newNode = new Node(data);
	if (this.head === null) {
		this.head = newNode;
	} else {
		let lastNode = this.head;
		while (lastNode.next !== null) {
			lastNode = lastNode.next;
		}
		lastNode.next = newNode;
	}
	this.size++;
}

LinkedList.prototype.deleteFromBegenning = function () {
	if (this.size !== 0) {
		let deleteNode = this.head;
		this.head = this.head.next;
		this.deleteNode = null;
		this.size--;
	}
}

LinkedList.prototype.deleteFromEnd = function () {
	let tempPtr = this.head;
	let previousPtr = null;
	if (this.size !== 0) {
		while(tempPtr.next) {
			previousPtr = tempPtr;
			tempPtr = tempPtr.next;
		}
		previousPtr.next = null;
		tempPtr = null;
		this.size--;
	}
}

// Usage 

let list = new LinkedList();
list.insertAtBegenning(20);
list.insertAtEnd(10);
list.displayAllNodes();
list.insertAtEnd(30);
list.insertAtEnd(70);
list.insertAtEnd(40);
list.insertAtEnd(60);
list.displayAllNodes();
list.deleteFromBegenning();
list.displayAllNodes();
list.deleteFromEnd();
list.displayAllNodes();
