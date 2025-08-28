"use strict";
class Fish {
    swim() {
        console.log("blu blu");
    }
}
class Bird {
    fly() {
        console.log("tweet tweet");
    }
}
const isFish = (pet) => {
    return pet instanceof Fish;
};
const f = new Fish();
const b = new Bird();
console.log(isFish(f));
console.log(isFish(b));
