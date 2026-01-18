// 22.Fibonacci Number
// npx ts-node 22.fibonacci-number.ts

export {};

function fib(n: number): number {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2)
};

const n = 10;
const result = fib(n);
console.log(`The ${n}th Fibonacci number is:`, result);