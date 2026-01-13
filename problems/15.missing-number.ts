// Missing Number
// run: npx ts-node 15.missing-number.ts

function missingNumber(nums: number[]): number {
  let n = nums.length;
  // use this formaula to sum the total of the array: n (n + 1) / 1
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i]!;
  }

  return totalSum - partialSum;
}

const newArr = [3, 0, 1];
const missingNum = missingNumber(newArr);
console.log("Missing number is:", missingNum);
