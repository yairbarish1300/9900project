const sqrt=(value:number, root:number=2):number=>{
    return Math.pow(value,1/ root);
}

console.log(sqrt(4))
console.log(sqrt(27,3))
console.log(sqrt(81))