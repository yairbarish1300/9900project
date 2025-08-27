interface Point {
  X: number;
  Y: number;
}
interface ThreeDimensionPoint extends Point{
    Z:number;
}

class SimpleCoordinate implements Point{
    X:number;
    Y:number;
    constructor(X:number,Y:number){
        this.X=X;
        this.Y=Y;
    }
}
class CoolCoordinate implements ThreeDimensionPoint{
    X:number;
    Y:number;
    Z:number;
    constructor(X:number, Y:number, Z:number){
        this.X=X;
        this.Y=Y;
        this.Z=Z;

    }
}

const c:SimpleCoordinate= new SimpleCoordinate(5,7);
const cc:CoolCoordinate= new CoolCoordinate(4,5,7);

console.log(c);
console.log(cc);


