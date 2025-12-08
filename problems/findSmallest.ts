// Find largest number in an array

function findSmallest(arr: number[]): number {
  let largest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num: number = arr[i] || 0;

    if (num < largest) {
      largest = num;
    }
  }

  return largest;
}

const nums: number[] = [0, 1, 3, 7, 2, 10, 5, 3];

const smallestNumber = findSmallest(nums);

console.log("Largest number in an array ", smallestNumber);
