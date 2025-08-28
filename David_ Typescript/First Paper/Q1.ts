const func =(a: number, b?:number)=>!b?a:Math.sqrt(a*b)
console.log(func(2));
console.log(func(2,8));