// It is a Linked list implementation so that the structure can grow and shrink dynamically. It follows the FIFO way
// Operations supported
// Enqueue, Dequeue, Front, display, clear
// {Author: Vaibhav Prasad}

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

Queue.prototype.front = function () {
// return the head/ front of the queue
    return this.head && this.head.data;
}

Queue.prototype.display = function () {
//  log the elements of the queue
    let tmpHead = this.head
    while (tmpHead !== null) {
        console.log(tmpHead.data);
        tmpHead = tmpHead.next;
    }
}

Queue.prototype.clear = function () {
//     delete all elements in queue
    while (this.head !== null) {
        let tmp = this.head;
        this.head = this.head.next;
        tmp = null;
    }
    this.tail = null;
    this.size = 0;
}

let queue1 = new Queue();

queue1.enqueue(12); // returns 1
queue1.enqueue(13); // returns 2
queue1.enqueue(14); // returns 3
queue1.enqueue(15); // returns 4

queue1.display(); // displays 12 13 14 15

queue1.dequeue(); // returns 12
queue1.dequeue(); // returns 13

queue1.display(); // displays 14 15
queue1.front(); // displays 14

queue1.clear(); // clears the queue, sets head and tail to null and size to 0
queue1.display(); // dolplays null since all elements have been deleted/ dequeued
