"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const elapsed = (fn) => __awaiter(void 0, void 0, void 0, function* () {
    const start = performance.now();
    yield fn();
    const end = performance.now();
    return end - start;
});
function elapsed2(fn, args) {
    return __awaiter(this, void 0, void 0, function* () {
        const start = performance.now();
        yield fn(...args);
        const end = performance.now();
        return end - start;
    });
}
const fibonachi = (n, delay) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise(res => setTimeout(res, delay));
    const fib = (k) => {
        if (k <= 1)
            return k;
        return fib(k - 1) + fib(k - 2);
    };
    return fib(n);
});
const wait3Sec = () => new Promise(resolve => setTimeout(resolve, 3000));
elapsed(wait3Sec).then(time => {
    console.log(`just wait took ${time.toFixed(2)} ms`);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const time = yield elapsed2(fibonachi, [10, 1000]);
    console.log(`fibo took ${time.toFixed(2)} ms`);
}))();
