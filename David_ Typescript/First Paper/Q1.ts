const f =(a: number, b?:number)=>{
    if(!b){
        return a;
    }
    else{
        return Math.sqrt(a*b);
    }

}
console.log(f(2));
console.log(f(2,8));