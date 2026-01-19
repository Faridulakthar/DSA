// 23. Linear Search
// npx ts-node 23.linear-search.ts

export {};

const arr = [5, 3, 2, 0, 1];
const target = 2;

function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Return -1 if target is not found
}

const result = linearSearch(arr, target);

console.log("result", result);
