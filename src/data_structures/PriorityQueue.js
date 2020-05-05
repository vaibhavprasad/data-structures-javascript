// Priority queue implementation using Heaps
// { Author: Vaibhav Prasad }

class Node {
    constructor (data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor () {
        this.data = [];
    }
}

PriorityQueue.prototype.enqueue = function (data, priority) {
    let node = new Node(data, priority);
    this.data.push(node);
    if (this.data.length > 1) {
        this.heapify();   
    }
}

PriorityQueue.prototype.dequeue = function () {
//     return the data with highest priority
//     1. replace the first element with the last
//     2. run extract min on the priority queue;
//     3. return the extracted element
    if (this.data.length === 0) {
        return null;
    } else if (this.data.length === 1) {
        return this.data.pop();
    } else {
        let maxPriorityEl = this.data[0];
        this.data[0] = this.data.pop();
        let headIndex = 0;
        while (headIndex < this.data.length) {
            let lcIndex = 2 * headIndex + 1;
            let rcIndex = 2 * headIndex + 2;
            if ((lcIndex < this.data.length && rcIndex < this.data.length) && (this.data[headIndex].priority > this.data[lcIndex].priority && this.data[headIndex].priority > this.data[rcIndex].priority)) {
                let highIndex = this.data[lcIndex].priority < this.data[rcIndex].priority ? lcIndex : rcIndex;
                let temp = this.data[headIndex];
                this.data[headIndex] = this.data[highIndex]
                this.data[highIndex] = temp;
                headIndex = highIndex;
            } else if ((lcIndex < this.data.length) && (this.data[headIndex].priority > this.data[lcIndex].priority)) {
                let tmp = this.data[lcIndex];
                this.data[lcIndex] = this.data[headIndex];
                this.data[headIndex] = tmp;
                headIndex = lcIndex;
            } else if ((rcIndex < this.data.length) && (this.data[headIndex].priority > this.data[rcIndex].priority )) {
                let tmp = this.data[rcIndex];
                this.data[rcIndex] = this.data[headIndex];
                this.data[headIndex] = tmp;
                headIndex = rcIndex;
            } else {
                return maxPriorityEl;
            }
        }
    }
}

PriorityQueue.prototype.heapify = function () {
    let elIndex = this.data.length - 1;
    while (elIndex > 0) {
        let pIndex = Math.floor((elIndex - 1) / 2);
        if (this.data[elIndex].priority < this.data[pIndex].priority) {
            let tmp = this.data[pIndex];
            this.data[pIndex] = this.data[elIndex];
            this.data[elIndex] = tmp;
            elIndex = pIndex;
            continue;
        }
        return;
    }
}

PriorityQueue.prototype.display = function () {
    for (let i = 0; i < this.data.length; i++) {
        console.log('data: ', this.data[i].data, ', priority: ', this.data[i].priority);
    }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(12, 4);
priorityQueue.enqueue(19, 3);
priorityQueue.enqueue('cheese', 2);
priorityQueue.enqueue('toast', 5);

priorityQueue.display();
