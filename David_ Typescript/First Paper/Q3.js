"use strict";
class SimpleCoordinate {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}
class CoolCoordinate {
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
}
const c = new SimpleCoordinate(5, 7);
const cc = new CoolCoordinate(4, 5, 7);
console.log(c);
console.log(cc);
