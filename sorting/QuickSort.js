// The following code shows the implementation of quick sort on a random array of 100,000 elements. Its a single pivot quick sort with pivot fixed as the 1st element of the array.
// No auxillary space has been used to the array arr is declared outside of the function scope.
// {Author: Vaibhav Prasad}

function quickSort(arr, l, r) { // initially l = 0, r = length - 1
    if (l >= r) {
        return arr;
    }
    let pivot = partition(arr, l , r);
    quickSort(arr, l, pivot - 1);
    quickSort(arr, pivot + 1, r);
}

function partition (arr, l, r) {
    let j = l + 1;
    let pivot = arr[l];
    for (let i = j; i <= r; i++) {
        if (arr[i] < pivot) {
            if (j !== i) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
            j++;
        } else {
            continue;
        }
    }
    arr[l] = arr[j - 1];
    arr[j - 1] = pivot;
    return j - 1;
}

function genRandomArray(size) {
    return Array.apply(null, {length: size}).map(Function.call, Math.random);
}

let arr = genRandomArray(100000);
let t0 = performance.now();
quickSort(arr, 0, 7);
let t1 = performance.now();
console.log(t1 - t0, '\n', arr);
