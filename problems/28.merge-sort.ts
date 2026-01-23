// 28. Sort an Array using Merge Sort
// npx ts-node 28.merge-sort.ts

export {};

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);

  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  return merge(left, right);
}

// Helper function to merge two sorted arrays into one sorted array
function merge(left: number[], right: number[]): number[] {
  const res: number[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i]! < right[j]!) {
      res.push(left[i]!);
      i++;
    } else {
      res.push(right[j]!);
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}

const arr = [5, 2, 3, 1];
const sortedArr = sortArray(arr);
console.log("Sorted array:", sortedArr);
