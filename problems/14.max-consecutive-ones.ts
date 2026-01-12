// Max Consecutive Ones
// run: npx ts-node 14.max-consecutive-ones.ts

function findMaxConsecutiveOnes(nums: number[]): number {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }

  // Math.max methoed is used to check which is larger between currentCount and maxCount
  return Math.max(currentCount, maxCount);
}

const newArr = [1, 1, 0, 1, 1, 1];
const maxConsecutiveOnes = findMaxConsecutiveOnes(newArr);
console.log("Maximum consecutive ones:", maxConsecutiveOnes);
