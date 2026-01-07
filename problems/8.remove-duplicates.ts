// Remove duplicates from sorted array

export {};

function removeDuplicates(nums: number[]): number {
  let x = 0;
  let a = nums;

  for (let i = 0; i < nums.length; i++) {
    if (a[i]! > a[x]!) {
      x = x + 1;
      a[x] = a[i]!;
    }
  }
  return x + 1;
}

const nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const length = removeDuplicates(nums);

console.log("Length after removing duplicates: ", length);
