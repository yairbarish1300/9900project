var f = function (a, b) {
    if (!b) {
        return a;
    }
    else {
        return Math.sqrt(a * b);
    }
};
console.log(f(2));
console.log(f(2, 8));
