// Write a function that receives a number as input and returns the count of digits in that number.

function countDigits(num: number): number {
  if (num === 0) {
    return 1;
  }
  let count: number = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

const result = countDigits(43223);
console.log("Count of digits:", result);
