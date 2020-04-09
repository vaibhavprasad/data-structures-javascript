// A String is Palindrome if it reads same backward and forward ex. madam, malayalam tec
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

isPalindrome('malayalam');	// false
