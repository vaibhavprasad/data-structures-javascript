// the following program contains two methods, one is the merge sort using recursion and another is a helper method to merge two sorted arrays
// {Author: Vaibhav Prasad}

function mergeSort (arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        let mid = Math.ceil(arr.length / 2);
        let a1 = mergeSort(arr.slice(0, mid));
        let a2 = mergeSort(arr.slice(mid, arr.length));
        return merge(a1, a2);
    }
}

function merge (nums1, nums2) {
    let mergedArr = [];
    let totalLen = nums1.length + nums2.length;
    if (nums1.length === 0) {
        mergedArr = nums2;
    } else if (nums2.length === 0) {
        mergedArr = nums1;
    } else {
        let i = 0;
        let j = 0;
        let k = 0;
        while (k <= totalLen / 2) {
            if(nums1[i] <= nums2[j]) {
                mergedArr.push(nums1[i])
                i += 1;
            } else {
                mergedArr.push(nums2[j]);
                j += 1;
            }
            if (i === nums1.length) {
                mergedArr = mergedArr.concat(nums2.slice(j));
                break;
            } else if (j === nums2.length) {
                mergedArr = mergedArr.concat(nums1.slice(i));
                break;
            }
        } 
    }
    return mergedArr;
}
function genRandomArray(size) {
    return Array.apply(null, {length: size}).map(Function.call, Math.random);
}
let data = genRandomArray(10000);
let t0 = performance.now();
let mergedData = mergeSort(data);
let t1 = performance.now();
console.log(t1 - t0, '\n', mergedData);
