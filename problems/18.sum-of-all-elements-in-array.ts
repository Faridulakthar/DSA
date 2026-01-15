// Sum of all elements in an array (using recursion)
// run: npx ts-node 18.sum-of-all-elements-in-array.ts

export {};

const arr = [5, 3, 2, 0, 1];

function sum(num: number): number {
  if (num == 0) {
    return arr[0]!;
  }
  return arr[num]! + sum(num - 1);
}

const result = sum(arr.length - 1);
console.log("Sum of all elements in array is:", result);
