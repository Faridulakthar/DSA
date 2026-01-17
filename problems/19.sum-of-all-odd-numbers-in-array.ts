// 19. sum of all odd numbers in an array (using recursion)
// run: npx ts-node 19.sum-of-all-odd-numbers-in-array.ts

export {};

const arr = [5, 3, 2, 0, 1];

function sumOfOdd(num: number): number {
  let isOdd = arr[num]! % 2 !== 0;

  if (num === 0) {
    return isOdd ? arr[0]! : 0;
  }

  return (isOdd ? arr[num]! : 0) + sumOfOdd(num - 1);
}

const result = sumOfOdd(arr.length - 1);
console.log("Sum of all odd numbers in array is:", result); 