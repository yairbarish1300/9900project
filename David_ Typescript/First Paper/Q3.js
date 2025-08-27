var SimpleCoordinate = /** @class */ (function () {
    function SimpleCoordinate(X, Y) {
        this.X = X;
        this.Y = Y;
    }
    return SimpleCoordinate;
}());
var CoolCoordinate = /** @class */ (function () {
    function CoolCoordinate(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
    return CoolCoordinate;
}());
var c = new SimpleCoordinate(5, 7);
var cc = new CoolCoordinate(4, 5, 7);
console.log(c);
console.log(cc);
