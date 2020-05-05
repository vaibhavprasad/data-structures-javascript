/*
Manually implemented hashing. The hash function is called the Polynomial Rolling Hash function

hash(s) = s[0]+ s[1]⋅p + s[2]⋅p ** 2 + ... + s[n−1]⋅p ** n−1 mod m
or, hash(s) = ∑(s[i]⋅p ** i) mod m

The collision resolution has been done via separate chaining( see insert and delete methods)
Assumption: strings containing only lower case characters will be inserted.
To make it support all characters, change the values of p and m in the hash function.
p is a prime number closest to the number of different unique characters that the hash function can encounter.
m is the size of the hash table. For bdetter distribution, make sure that m is large and GCD(p,m) = 1

{ Author: Vaibhav Prasad }
*/


function hash (str) {
	const p = 31;
	const m = 26;
	let total = 0;
	for (let i = 0; i < str.length; i++) {
		total = (total + (str.charCodeAt(i) - 96) * p ** i) % m;
	}
	return total;
}
class Node {
	constructor (data) {
		this.data = data;
		this.next = null;
	}
}
class HashMap {
	constructor () {
		this.hashArr = new Array(26).fill(null);
	}
}

HashMap.prototype.search = function (data) {
    let index = hash(data);
    if (!this.hashArr[index]) {
		return false;
	} else {
		let head = this.hashArr[index];
		while (head) {
		    if (head.data === data) {
                return true;
            }
            head = head.next;
		}
		return false;
	}
}

HashMap.prototype.insert = function (data) {
	let index = hash(data);
	let node = new Node(data);
	if (!this.hashArr[index]) {
		this.hashArr[index] = node;
	} else {
		let head = this.hashArr[index];
		while (head.next) {
			head = head.next;
		}
		head.next = node;
	}
	return index;
}

HashMap.prototype.delete = function (data) {
	let index = hash(data);
	if (this.hashArr[index]) {
		if (this.hashArr[index].data === data) {
			this.hashArr[index] = this.hashArr[index].next;
			return data;
		}
		let head = this.hashArr[index].next;
		let prev = this.hashArr[index];
		while (head) {
			if (head.data === data) {
				prev.next = head.next;
				head = null;
				return data;
			}
			prev = head;
			head = head.next;
		}
	}
	return null;
}

HashMap.prototype.display = function () {
    console.log(this.hashArr);
}

let hashMap = new HashMap();
hashMap.insert('hello');
hashMap.insert('vaibhav');
hashMap.insert('today');
hashMap.insert('is');
hashMap.insert('awesome');
hashMap.insert('great');
hashMap.insert('things');
hashMap.insert('happen');
hashMap.insert('everyday');
hashMap.insert('chill');
hashMap.insert('devpriya');
hashMap.insert('dharam');
hashMap.insert('dharamendra');
hashMap.insert('kalyani');    
hashMap.insert('nilesh');
hashMap.insert('richa');
hashMap.insert('sinha');
hashMap.insert('abhishek');
hashMap.insert('chull');
hashMap.insert('champak');
hashMap.insert('malgudi');
hashMap.insert('damodar');
hashMap.insert('puroshottam');

hashMap.search('champa');    // false
hashMap.search('kalyani');    // true

hashMap.display();

hashMap.delete('kalyani');
hashMap.delete('champa');

console.log('**********************************************************');
hashMap.display();

