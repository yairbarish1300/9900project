"use strict";
function unique(arr) {
    const newArr = [...new Set(arr)];
    return newArr;
}
const arr = [1, 1, 2, 2, 3, 4, 5, 6, 1];
const chars = ['q', 'q', 'e', 'r', 'e', 'q', '2', 'x', '0'];
console.log(unique(arr));
console.log(unique(chars));
