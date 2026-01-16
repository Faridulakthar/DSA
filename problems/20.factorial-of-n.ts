// 20.Factorial of N
// npx ts-node 20.factorial-of-n.ts

export {};

const n = 5;

function factorial(num: number): number {
  if (num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

const result = factorial(n);
console.log(`Factorial of ${n} is:`, result);   