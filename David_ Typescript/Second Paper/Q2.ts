const elapsed = async(fn: ()=>Promise<void> ):Promise<number>=>{
    const start:number = performance.now();
    await fn();
    const end:number = performance.now();
    return end-start;
}

async function elapsed2<Args extends any[],R>(
    fn: (...args:Args)=>Promise<R>,
    args:Args
): Promise<number>{
    const start:number = performance.now();
    await fn(...args);
    const end:number = performance.now();
    return end-start;
}

const fibonachi = async (n:number, delay:number):Promise<number> => {
    await new Promise<void>(res=> setTimeout(res, delay));

    const fib= (k:number):number=>{
        if(k<=1) return k;
        return fib(k-1)+ fib(k-2);
    }

    return fib(n);
}

const wait3Sec= ()=> new Promise<void>(resolve=>setTimeout (resolve,3000));

elapsed(wait3Sec).then(time => {
  console.log(`just wait took ${time.toFixed(2)} ms`);
});

(async () => {
  const time = await elapsed2(fibonachi, [10, 1000]); 

  console.log(`fibo took ${time.toFixed(2)} ms`);
})();



