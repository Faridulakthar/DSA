export {};

// Find second largest number in an array

function findSecondLargest(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num: number = arr[i] || 0;

    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

const nums: number[] = [0, 1, 3, 7, 2, 10, 5, 3, 12];

const secondLargestNumber = findSecondLargest(nums);

console.log("Second Largest number in an array ", secondLargestNumber);
