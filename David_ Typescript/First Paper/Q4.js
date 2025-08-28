"use strict";
const stringify = (a) => {
    if (typeof a === "string") {
        return a;
    }
    else {
        return a.toFixed(2);
    }
};
console.log(stringify("qwerty"));
console.log(stringify(6));
console.log(stringify(3.14744433));
