/*
Implementation of a basic undirected graph using adjacency list notation

*/

class Graph {
	constructor () {
		this.adjacencyList = {};
		this.size = 0;
	}
}

class Edge {
	constructor (endVertex) {
		this.edge = [];
		this.edge.push(endVertex);
	}
}

Graph.prototype.insertVertex = function (vertex) {
	this.adjacencyList[vertex] = [];
}

Graph.prototype.removeVertex = function (vertex) {
	if(this.adjacencyList[vertex]) {
		let vertexEdges = [...this.adjacencyList[vertex]];
		vertexEdges.forEach(item => {
			this.removeEdge(vertex, item);
		});
		delete this.adjacencyList[vertex];
	}
}

Graph.prototype.insertEdge = function (startVertex, endVertex) {
	if (!this.adjacencyList[startVertex]) {
		this.insertVertex(startVertex);
	}
	if (!this.adjacencyList[endVertex]) {
		this.insertVertex(endVertex);
	}
	this.adjacencyList[startVertex].push(endVertex);
	this.adjacencyList[endVertex].push(startVertex);
}

Graph.prototype.removeEdge = function (startVertex, endVertex) {
	if (!this.adjacencyList[startVertex] || !this.adjacencyList[endVertex]) {
		return null;
	} else if (this.adjacencyList[startVertex].indexOf(endVertex) >= 0) {
		this.adjacencyList[startVertex].splice(this.adjacencyList[startVertex].indexOf(endVertex), 1);
		this.adjacencyList[endVertex].splice(this.adjacencyList[endVertex].indexOf(startVertex), 1);
	}
}

Graph.prototype.dfs = function (start) {
	const visited = {};
	const graph = this.adjacencyList;
	(function dfsRecursive (start) {
		if (!start) {
			return null;
		} else {
			visited[start] = true;
			graph[start].forEach(item => {
				if (!visited[item]) {
				    return dfsRecursive(item);	
				}
			});
		}
	})(start);
	return Object.keys(visited);
}

Graph.prototype.dfsIterative = function (start) {
	const graph = this.adjacencyList;
	const visited = {};
	// using array as a stack and not the lkl implementation of  stack
	const stack = [];
	stack.push(start);
	while(stack.length > 0) {
		let cur = stack.pop();
		if (!visited[cur]) {
			visited[cur] = true;
			for (let i = graph[cur].length - 1; i >= 0; i--) {
				stack.push(graph[cur][i]);
			}
		}
	}
	return Object.keys(visited);
}

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

Graph.prototype.bfsIterative = function (start) {
	// using queue implemented using lkl
	let graph = this.adjacencyList;
	let queue = new Queue();
	let visited = {};
	queue.enqueue(start);
	while(queue.size > 0) {
		let cur = queue.dequeue();
		if (!visited[cur]) {
			visited[cur] = true;
			graph[cur].forEach(item => {
				if (!visited[item]) {
					queue.enqueue(item);
				}
			});
		}
	}
	return Object.keys(visited);
}

Graph.prototype.bfs = function (start) {
	let graph = this.adjacencyList;
	let visited = {};
	let queue = new Queue();
	queue.enqueue(start);
	(function bfsRec (queue) {
		if (queue.size === 0) {
			return;
		} else {
			let cur = queue.dequeue();
			visited[cur] = true;
			graph[cur].forEach(item => {
				if (!visited[item]) {
					queue.enqueue(item);
				}
			});
			return bfsRec(queue);
		}
	})(queue);
	return Object.keys(visited);
}

let adjListGraph = new Graph();

// adjListGraph.insertEdge('A', 'B');
// adjListGraph.insertEdge('A', 'C');
// adjListGraph.insertEdge('A', 'E');

// adjListGraph.insertEdge('C', 'D');

// adjListGraph.insertEdge('D', 'M');

adjListGraph.insertEdge('A', 'B');
adjListGraph.insertEdge('A', 'C');
adjListGraph.insertEdge('B', 'D');
adjListGraph.insertEdge('C', 'E');
adjListGraph.insertEdge('D', 'E');
adjListGraph.insertEdge('D', 'F');
adjListGraph.insertEdge('E', 'F');

// console.log(adjListGraph.adjacencyList);

// adjListGraph.removeEdge('A', 'C');

// adjListGraph.removeVertex('A');

// console.log(adjListGraph.adjacencyList);


console.log(adjListGraph.dfs('A'));

console.log(adjListGraph.dfsIterative('A'));

console.log(adjListGraph.bfs('A'));

console.log(adjListGraph.bfsIterative('A'));

