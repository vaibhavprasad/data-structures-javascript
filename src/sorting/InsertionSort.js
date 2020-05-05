// Implementing insertion sort in an iterative way. Works on both numbers and strings.
// {Author: Vaibhav Prasad}

function insertionSort(a) {
    if (!a || a.length === 0) {
        return [];
    }
    let i = 1;
    while (i < a.length) {
        let j = i;
        let cur = a[i];
        while (j > 0) {
            if (cur < a[j - 1]) {    // change < to > to sort in descending order.
                a[j] = a[j - 1];
                j--;
            } else {
                break;
            }
        }
        a[j] = cur;
        i++;
    }
    return a;
}

insertionSort(['vaibhav', 'pankaja', 'pankaj', 'nilesh', 'dharmendra']);
// insertionSort([2,1,-3,-9,-5,4]);
