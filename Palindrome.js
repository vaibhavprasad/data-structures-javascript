// A String is Palindrome if it reads same backward and forward ex. madam, malayalam tec
// {Author: Vaibhav Prasad}

// Iterative solution
let isPalindrome = function (word) {
	let i = 0;
	let j = word.length - 1;
	word = word.toLowerCase();
	while(i < j) {
		if (word[i] === word[j]) {
			i +=1;
			j -=1;
			continue;
		} else {
			return false;
		}
	}
	return true;
}

isPalindrome('malayalam');	// true

// Recursive solution

let isPlaindrome = function (start, end, str) {
	if (start === end) {
		return true;
	} else if (start > end) {
		return true;
	} else if (str[start] === str[end]) {
		return isPalindrome(start + 1, end - 1, string);
	} else {
		return false;
	}
}

isPalindrome('malayalam');	// true
