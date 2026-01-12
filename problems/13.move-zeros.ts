// Move zeros;
// run: npx ts-node 13.move-zeros.ts

function moveZeroes(nums: number[]): void {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i]!;
      x++;
    }
  }

  // Fill all the remaining places to zero
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log("Array after moving zeros:", arr);