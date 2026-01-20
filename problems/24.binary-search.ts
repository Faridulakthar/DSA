// 24. Binary Search
// npx ts-node 24.binary-search.ts

export {};

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]!) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const result = search(nums, target);

console.log("result", result);
