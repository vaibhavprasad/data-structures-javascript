var majorityElement = function(nums) {
    let majEl = nums[0];
    let count = 1;
    let i = 1;
    while (i < nums.length) {
    	if (majEl === nums[i]) {
    		count++;
    	} else {
    		count -= 1;
    		if (count === 0) {
    			majEl = nums[i];
    			count += 1;
    		}
    	}
    	i++;
    }
    count = 0;
    for(i = 0; i < nums.length; i++) {
    	if (nums[i] === majEl) {
    		count++;
    	}
    }
    return count > Math.floor(nums.length / 2) ? majEl : null;
};

var inp = [2,1,2,1,2,1,2];

console.log(majorityElement(inp));
