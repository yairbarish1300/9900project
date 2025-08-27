var sqrt = function (value, root) {
    if (root === void 0) { root = 2; }
    return Math.pow(value, 1 / root);
};
console.log(sqrt(4));
console.log(sqrt(27, 3));
console.log(sqrt(81));
