// Linked list implementation of the stack data structure. It grows and shrinks dynamically. Array implementation is provided by default by JS Array

// Operations supported:
// Push -> inserts data into the top of the stack
// Pop -> removes data from the top of the stack
// Peek -> returns the value of the top most element of the stack without deleting that element from the stack.
// display -> prints all the elements of the stack in the LIFO order
// {Author: Vaibhav Prasad}

class Node {
    constructor (data) {
        this.data = data;
        this.next = null
    }
}

class Stack {
    constructor () {
        this.size = 0;
        this.head = null;
    }
}

Stack.prototype.push = function (data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this.size;
}

Stack.prototype.pop = function () {
    if (!this.head) {
        return null;
    } else {
        let poppedNode = this.head;
        this.head = this.head.next;
        return poppedNode.data;
    }
}

Stack.prototype.peek = function () {
	if (!this.head) {
		return this.head;
	} else {
		return this.head.data;
	}
}

Stack.prototype.display = function () {
    let tempHead = this.head;
    while (tempHead !== null) {
        console.log(tempHead.data);
        tempHead = tempHead.next;
    }
}

let stack1 = new Stack();   // Creates a new empty Stack with instance stack1

stack1.peek();	// returns null since the stack is empty
stack1.push(12);    // Pushes element 12 into Stack instanciated with stack1 and returns the stack size i.e 1
stack1.push(13);    // returns 2
stack1.push(14);    // returns 3
stack1.peek();	// returns top of stack i.e. 14
stack1.display();   // prints the stack --> 14 13 12

stack1.pop();   // removes the element 14(top) from stack and returns the data;
