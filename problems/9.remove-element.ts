// Remove element from array

export {};

function removeElement(nums: number[], val: number): number {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i]!;
      x = x + 1;
    }
  }
  return x;
}
const nums: number[] = [3, 2, 2, 3];
const val: number = 3;

const length = removeElement(nums, val);

console.log("Length after removing element: ", length);