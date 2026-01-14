// Sum of first n numbers (using recursion)
// run: npx ts-node 17.sum-of-first-n-numbers.ts

export {};

function sum(num: number): number {
  if (num <= 0) {
    return 0;
  }
  return num + sum(num - 1);
}

const n = 5;
const result = sum(n);
console.log(`Sum of first ${n} numbers is:`, result);
