// Signle Number
// run: npx ts-node 16.single-number.ts

function singleNumber(nums: number[]) {
  //   let hash = {};

  //   for (let i = 0; i < nums.length; i++) {
  //     if (!hash[nums[i]]!) {
  //       hash[nums[i]!] = 1;
  //     } else {
  //       hash[nums[i]]++;
  //     }
  //   }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (hash[nums[i]] == 1) {
  //       return nums[i]!;
  //     }
  //   }

  // XOR way ^

  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i]!;
  }
  return xor;
}

const array = [4, 1, 2, 1, 2];
const singleNum = singleNumber(array);
console.log("Single number is:", singleNum);
