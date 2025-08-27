class Fish{swim():void{console.log("blu blu")}}
class Bird{fly():void{console.log("tweet tweet")}}

const isFish =(pet:Fish|Bird):pet is Fish=>{
    return pet instanceof Fish;
}

const f = new Fish();
const b = new Bird();

console.log(isFish(f))
console.log(isFish(b))
