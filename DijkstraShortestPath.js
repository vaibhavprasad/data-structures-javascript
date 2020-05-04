// It works on a weighted graph
// 1. Create a weighted graph with add vertex and addEdge
// 2. Create an empty priority Queue with the vertices and priority as infinity
// 




class Graph {
	constructor () {
		this.adjacencyList = {};
	}
}

Graph.prototype.addVertex = function (vertex) {
	this.adjacencyList[vertex] = {};
}

Graph.prototype.addEdge = function (startVertex, endVertex, weight) {
	if (!this.adjacencyList[startVertex]) {
		this.addVertex(startVertex);
	}
	if (!this.adjacencyList[endVertex]) {
		this.addVertex(endVertex);
	}
	this.adjacencyList[startVertex][endVertex] = weight;
	this.adjacencyList[endVertex][startVertex] = weight;
}

class PriorityQueue {
	constructor () {
		this.queue = [];
	}
}

PriorityQueue.prototype.enqueue = function (vertex, weight) {
	let data = {vertex, weight};
	this.queue.push(data);
	this.heapify();
}

PriorityQueue.prototype.dequeue = function () {
	let high = this.queue[0];
	this.queue[0] = this.queue.pop();
	let queue = this.queue;
	// extractMax
	(function adjust(cur) {
		let lc = 2 * cur + 1;
		let rc = 2 * cur + 2;
		let size = queue.length;

		if ((lc >= size && rc >= size) || (lc < size && queue[cur].weight < queue[lc].weight) || (rc < size && queue[cur].weight < queue[rc].weight)) {
			return;
		} else {
			if (queue[cur].weight > queue[lc].weight && queue[cur].weight > queue[rc].weight) {
				let tmp = queue[cur];
				let small = queue[lc].weight < queue[rc].weight ? lc : rc;
				queue[cur] = queue[small];
				queue[small] = tmp;
				return adjust(small);
			}
		}
	})(0);
	this.queue = queue;
	return high;
}

PriorityQueue.prototype.heapify = function () {
    if (this.queue.length === 0 || this.queue.length === 1) {
        return;
    } else {
		let queue = this.queue;
		(function minHeapify(cur) {
			let par = Math.floor((cur - 1) / 2);
			if (cur === 0 || queue[cur].weight > queue[par].weight) {
				return;
			} else {
				let tmp = queue[par];
				queue[par] = queue[cur];
				queue[cur] = tmp;
				return minHeapify(par);
			}
		})(queue.length - 1);
		this.queue = queue;
	}
}

// Dijkstra's Shortest Path implementation
Graph.prototype.dsp = function (start, end) {
	const previous = {};
	const distances = {};
	const visited = {};
	Object.keys(this.adjacencyList).forEach(item => {
		previous[item] = null;
		distances[item] = Infinity;
	});
	let pq = new PriorityQueue();
	distances[start] = 0;
	pq.enqueue(start, 0);
	let pathFound = false;
	while(pq.queue.length > 0) {
		let cur = pq.dequeue();
		if (!visited[cur.vertex]) {
			visited[cur.vertex] = true;
		}
		if (cur.vertex === end) {
			pathFound = true;
			break;
		}
		for (let vertex in this.adjacencyList[cur.vertex]) {
			if (distances[vertex] > this.adjacencyList[cur.vertex][vertex] + distances[cur.vertex]) {
				distances[vertex] = this.adjacencyList[cur.vertex][vertex] + distances[cur.vertex];
				previous[vertex] = cur.vertex;
				pq.enqueue(vertex, this.adjacencyList[cur.vertex][vertex]);
			}
		}
	}
	if (pathFound) {
		let cur = end;
		let result = [];
		while (cur !== start) {
			result.push(cur);
			cur = previous[cur];
		}
		result.push(cur);
		return {'path': result.reverse().join(', '), 'cost': distances[end]};
	} else {
		return `No Path Found From '${start}' to '${end}'`;
	}
	console.log(distances);
	console.log(previous);
}


// let pq = new PriorityQueue();
// pq.enqueue('A', 5);
// pq.enqueue('B', 4);
// pq.enqueue('C', 3);
// console.log(pq.queue);

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dsp('A', 'E'));

// console.log(graph.adjacencyList);







