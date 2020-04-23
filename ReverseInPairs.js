//     function to reverse given elements of a singly linked list in pairs 
//     head->10->12->9->5->1->22->11->null, t = 2;
//     head->12->10->5->9->22->1->11->null
//     { Author: Vaibhav Prasad }

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
}

LinkedList.prototype.insert = function (data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
}

LinkedList.prototype.display = function () {
    let head = this.head;
    while(head) {
        console.log(head.data);
        head = head.next;
    }
}

// Iterative solution
LinkedList.prototype.reverseInPairsIter = function (t) {
    let cur = this.head;
    this.head = cur.next;
    let pre = null;
    while(cur && cur.next) {
        let next = cur.next;
        cur.next = next.next;
        next.next = cur;
        if (pre) {
            pre.next = next;
        }
        pre = cur;
        cur = cur.next;
    }
}

// Recursive Solution
LinkedList.prototype.reverseInPairsRec = function (head) {
    if (!head || !head.next) {
        return head;
    } else {
        let next = head.next;
        head.next = next.next;
        next.next = head;
        head.next = this.reverseInPairsRec(head.next);
        head = next;
        return head;
    }
}

let list = new LinkedList();

list.insert(10);
list.insert(12);
list.insert(9);
list.insert(5);
list.insert(1);
list.insert(22);
list.insert(11);
