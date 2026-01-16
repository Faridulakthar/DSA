// 21. Power of Two
// npx ts-node 21.power-of-two.ts

export {};

function isPowerOfTwo(n: number): boolean {
  if (n == 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}

const n = 16;
const result = isPowerOfTwo(n);
console.log(`${n} is a power of two:`, result); 