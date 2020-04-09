// Binary Search Implementation on an array of integers. If the number is present in the array, it returns index of the number else -1;

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,15,19], 16);
