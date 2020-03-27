// Singly Linked List implementation with helper utilities

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

LinkedList.prototype.insertAtIndex = function (data, index) {
	if (index >= this.size) {
		return
	} else {
		let tmpPtr = this.head;
		for (let i = 0; i < index; i++) {
			tmpPtr = tmpPtr.next;
		}
		let newNode = new Node(data);
		newNode.next = tmpPtr.next;
		tmpPtr.next = newNode;
	}
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

LinkedList.prototype.deleteFromIndex = function (index) {
	if (index >= this.size || index < 0) {
		return;
	} else if (index === 0) {
		this.deleteFromBegenning();
	} else if (index === this.size - 1) {
		this.deleteFromEnd();
	} else {
		let tmpPtr = this.head;
		for (let i = 1; i < index; i++) {
			tmpPtr = tmpPtr.next;
		}
		let tempNode = tmpPtr.next;
		tmpPtr.next = tempNode.next;
		tempNode = null;
	}
}

LinkedList.prototype.reverseList = function () {
	// using three pointers; one using stack will be covered in the stack.js file
	if (this.size === 0) {
		return;
	}
	let prevPtr = null;
	let currentPtr = this.head;
	let nextPtr = null;
	while (currentPtr !== null) {
		nextPtr = currentPtr.next;
		currentPtr.next = prevPtr;
		prevPtr = currentPtr;
		currentPtr = nextPtr;
	}
	this.head = prevPtr;
}

// Usage 

let list = new LinkedList();
list.insertAtBegenning(20);

list.insertAtEnd(10);
list.insertAtEnd(30);
list.insertAtEnd(70);
list.insertAtEnd(40);
list.insertAtEnd(60);

list.displayAllNodes();

list.deleteFromBegenning();
list.deleteFromIndex(2);
list.deleteFromEnd();

list.displayAllNodes();

list.reverseList();
list.displayAllNodes();
