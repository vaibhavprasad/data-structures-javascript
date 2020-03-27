// Doubly Linked List Implementation with helper utilities

class Node {
	constructor (data, prev = null, next = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.size = 0;
	}
}

DoublyLinkedList.prototype.displayAllNodes = function () {
	let currentNode = this.head;
	while (currentNode !== null) {
		console.log(currentNode.data);
		currentNode = currentNode.next;
	}
}

DoublyLinkedList.prototype.insertAtBegenning = function (data) {
	let newNode = new Node(data);
	newNode.next = this.head;
	this.head = newNode;
	this.size++;
}

DoublyLinkedList.prototype.insertAtEnd = function (data) {
	let newNode = new Node(data);
	if (this.size === 0) {
		this.head = newNode;
	} else {
		let currentNode = this.head;
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
		newNode.prev = currentNode;
	}
	this.size++;
}

DoublyLinkedList.prototype.insertAtIndex = function (data, index) {
	if (index >= this.size) {
		this.insertAtEnd(data);
	} else if (index <= 0) {
		this.insertAtBegenning(data);
	} else {
		let currentNode = this.head;
		for (let i = 1; i < index; i++) {
			currentNode = currentNode.next;
		}
		newNode.next = currentNode.next;
		newNode.prev = currentNode;
		currentNode.next.prev = newNode;
	}
}

DoublyLinkedList.prototype.deleteFromBegenning = function () {
	if (this.size > 0) {
		let firstNode = this.head;
		this.head = this.head.next;
		this.head.prev = null;
		firstNode = null;
		this.size--;
	}
}

DoublyLinkedList.prototype.deleteFromEnd = function () {
	if (this.size > 0) {
		let lastNode = this.head;
		while (lastNode.next) {
			lastNode = lastNode.next;
		}
		lastNode.prev.next = null;
		lastNode = null;
		this.size--;
	}
}

DoublyLinkedList.prototype.deleteFromIndex = function (index) {
	if (this.size > 0) {
		if (index <= 0) {
			this.deleteFromBegenning();
		} else if (index >= this.size - 1) {
			this.deleteFromEnd();
		} else {
			let targetNode = this.head;
			for (let i = 1; i < this.size - 1; i++) {
				targetNode = targetNode.next;
			}
			targetNode.prev.next = targetNode.next;
			targetNode.next.prev = targetNode.prev;
			targetNode = null;
			this.size--;
		}
	}
}

let dll = new DoublyLinkedList();
dll.insertAtBegenning(10);
dll.insertAtEnd(30);
dll.insertAtEnd(20);
dll.displayAllNodes();
// dll.deleteFromBegenning();
// dll.deleteFromEnd();
dll.deleteFromIndex(2);
console.log('\n\n');
dll.displayAllNodes();

