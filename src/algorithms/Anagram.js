// a string formed by rearranging the letters of another are anagrams. The function return the true if the inputs are anagram else false
// {Author: Vaibhav Prasad}

let anagram = function (a,b) {
    let obj1 = {};
    let obj2 = {};
    for (let i of a) {
        obj1[i] = obj1[i] ? obj1[i] + 1 : 1;
    }
    for (let i of b) {
        obj2[i] = obj2[i] ? obj2[i] + 1 : 1;
    }
    for (let i in obj1) {
        if(obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;
    
}

anagram('iti', 'tia');    // false
anagram('saad', 'daas');    // true
