// The following is the implementation of Knuth-Morris-Prat Substring finding algorithm
// which works in O(m+n) ~ O(n) time complexity and O(m) ~ O(n) Space

// Creates and return an array containing the lasgest suffix which is also a prefix; 
function getLPSArray (str) {
	let lpsArr = new Array(str.length).fill(0);
	let i = 1;
	let j = 0;
	while ( i < str.length) {
		if(str[i] === str[j]) {
			lpsArr[i] = lpsArr[i - 1] + 1;
			i++; j++;
		} else {
			i++;
		}
	}
	return lpsArr;
}

function checkString (str, pattern) {
	let lpsArr = getLPSArray(pattern);
	let i = 0;
	let j = 0;
	while (i < str.length) {
		if (str[i] === pattern[j]) {
			i++;
			j++;
			if (j === pattern.length) {
				return true;
			}
		} else {
			if (j > 0) {
				j = lpsArr[j - 1];
			} else {
				i++
			}
		}
	}
	return false;
}

console.log(checkString('ababcabcabababd', 'cabcac')); // false
console.log(checkString('ababcabcabababd', 'ababd')); // true
